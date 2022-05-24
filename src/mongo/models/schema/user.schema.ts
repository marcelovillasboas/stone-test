import { model, Schema } from 'mongoose';
import { IUser } from '../types';

const schema = new Schema({
  _id: String,
  name: String,
  email: String,
});

// eslint-disable-next-line import/prefer-default-export
export const UserModel = model<IUser>('User', schema);
