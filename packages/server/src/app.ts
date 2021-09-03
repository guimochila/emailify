import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import 'dotenv/config';
import router from './routes';

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET ?? ''],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

export default app;
