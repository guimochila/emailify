import { Schema, model, Document } from 'mongoose';

export type UserDocument = Document & {
  googleId: string;
  name: string;
  email: string;
  photo: string;
  credits: number;
};

const userSchema = new Schema<UserDocument>({
  googleId: String,
  name: String,
  email: String,
  photo: String,
  credits: {
    type: Number,
    default: 0,
  },
});

export const User = model<UserDocument>('User', userSchema);
