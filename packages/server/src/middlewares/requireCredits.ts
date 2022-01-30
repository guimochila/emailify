import { RequestHandler } from 'express';

export const isLoggedIn: RequestHandler = (req, res, next) => {
  if (req.user.credits > 1) {
    next();
    return;
  }

  res.status(403).json({
    message: 'You do not have enough credits',
  });
};
