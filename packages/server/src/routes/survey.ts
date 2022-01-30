import express from 'express';
import { createSurvey } from '../controllers/survey';

export function getSurveyRoutes() {
  const router = express.Router();

  router.use('/', createSurvey);
}
