import type { RequestHandler } from 'express';

export const googleCallback: RequestHandler = (_, res) => {
  res.redirect(302, 'http://localhost:3000/');
};

export const getCurrentUser: RequestHandler = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'You must be logged in.' });
  }

  return res.json(req.user);
};

export const logout: RequestHandler = (req, res) => {
  req.logOut();
  res.json(req.user);
};
