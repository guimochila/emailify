import express from 'express';
import passport from 'passport';

const router = express.Router();

/* Authentication OAuth Route */
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get('/auth/google/callback', passport.authenticate('google'));

router.get('/api/current_user', (req, res) => {
  res.json(req.user);
});

router.get('/api/logout', (req, res) => {
  req.logOut();
  res.json(req.user);
});

export default router;
