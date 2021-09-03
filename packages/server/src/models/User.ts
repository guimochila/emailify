import { Schema, model, Document } from 'mongoose';

export type UserDocument = Document & {
  googleId: string;
  name: string;
};

const userSchema = new Schema<UserDocument>({
  googleId: String,
  name: String,
});

export const User = model<UserDocument>('User', userSchema);
