import { Schema, model, Document, PopulatedDoc } from 'mongoose';
import { RecipientDocument, recipientSchema } from './Receipient';
import { UserDocument } from './User';

export interface SurveyDocument extends Document {
  title: string;
  body: string;
  subject: string;
  recipients: RecipientDocument[];
  yes: number;
  no: number;
  _user: PopulatedDoc<UserDocument>;
  dateSent: Date;
  dateLastResponded: Date;
}

const surveySchema = new Schema<SurveyDocument>({
  title: String,
  body: String,
  subject: String,
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  dateLastResponded: Date,
});

export const Survey = model<SurveyDocument>('Survey', surveySchema);
