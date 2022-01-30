import express from 'express';
import { getAuthRoutes } from './auth';
import { getPaymentRoutes } from './payment';

export function getRoutes() {
  const router = express.Router();

  router.use('/auth', getAuthRoutes());
  router.use('/payment', getPaymentRoutes());

  return router;
}
