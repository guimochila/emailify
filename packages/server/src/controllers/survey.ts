import type { RequestHandler } from 'express';
import { Survey } from '../models/Survey';

const transformListToArray = (list: string, key: string) => {
  return list.split(',').map((item) => ({ [key]: item.trim() }));
};

export const createSurvey: RequestHandler = (req, res) => {
  const { title, subject, body, recipients } = req.body;

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: transformListToArray(recipients, 'email'),
    _user: req.user.id,
    dateSent: Date.now(),
  });

  survey.save();
};
