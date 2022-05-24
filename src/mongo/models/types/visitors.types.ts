import { Document } from 'mongoose';

export type VisitorType = {
    _id: string,
    count: number,
}

export interface IVisitor extends Document {
    _id: string,
    count: number,
}
