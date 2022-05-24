import { Document } from 'mongoose';

export type UserType = {
    _id: string,
    name: string,
    email: string,
}

export interface IUser extends Document {
    _id: string,
    name: string,
    email: string,
}
