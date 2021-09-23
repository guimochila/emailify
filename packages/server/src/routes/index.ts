import express from 'express';
import passport from 'passport';
import {
  getCurrentUser,
  googleCallback,
  isLoggedIn,
  logout,
} from '../controllers/authentication';
import { paymentController } from '../controllers/payment';

const router = express.Router();

/* Authentication OAuth Route */
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  googleCallback,
);
router.get('/api/current_user', getCurrentUser);
router.get('/api/logout', logout);
/* End of Authentication Route */

/* Start of Payment Route */
router.post('/payment', isLoggedIn, paymentController);
/* End of Payment Route */

export default router;
