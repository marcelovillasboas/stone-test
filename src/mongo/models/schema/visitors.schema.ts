import { model, Schema } from 'mongoose';
import { IVisitor } from '../types';

const schema = new Schema({
  _id: String,
  count: Number,
});

// eslint-disable-next-line import/prefer-default-export
export const VisitorModel = model<IVisitor>('Visitor', schema);
