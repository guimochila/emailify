import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import 'dotenv/config';
import { User } from './../models/User';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_SECRET_KEY;

if (!googleClientId || !googleClientSecret) {
  throw new Error(
    'Google OAuth credentials not found. Please, check the if env variables GOOGLE_CLIENT_ID and GOOGLE_SECRET_KEY are set.',
  );
}

/* TODO: Improve types */
type TUser = {
  id?: string;
};

passport.serializeUser((user: TUser, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);

  if (user) {
    done(null, user);
  }
});

passport.use(
  new Strategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (_, __, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = await new User({
          googleId: profile.id,
          name: profile.name?.givenName,
        }).save();
      }

      done(null, user);
    },
  ),
);
