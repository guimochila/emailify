import type { UserDocument } from './models/User';
import type { User } from 'express';

type UserExtends = UserDocument & User;
declare global {
  namespace Express {
    interface Request {
      user: UserExtends;
    }
  }
}
