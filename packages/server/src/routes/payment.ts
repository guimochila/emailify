import express from 'express';
import { isLoggedIn } from '../middlewares/isLoggedIn';
import { paymentController } from '../controllers/payment';

export function getPaymentRoutes() {
  const router = express.Router();

  router.post('/', isLoggedIn, paymentController);

  return router;
}
