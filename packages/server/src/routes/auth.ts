import express from 'express';
import passport from 'passport';
import {
  getCurrentUser,
  googleCallback,
  logout,
} from '../controllers/authentication';

export function getAuthRoutes() {
  const router = express.Router();

  router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );
  router.get(
    '/google/callback',
    passport.authenticate('google'),
    googleCallback,
  );

  router.get('/current_user', getCurrentUser);
  router.get('/logout', logout);

  return router;
}
