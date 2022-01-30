import { Schema, Document } from 'mongoose';

export interface RecipientDocument extends Document {
  email: string;
  responded: boolean;
}

export const recipientSchema = new Schema<RecipientDocument>({
  email: String,
  responded: { type: Boolean, default: false },
});
