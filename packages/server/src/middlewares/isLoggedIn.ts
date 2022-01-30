import { RequestHandler } from 'express';

export const isLoggedIn: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }

  res.status(401).json({
    message: 'You must be logged in',
  });
};
