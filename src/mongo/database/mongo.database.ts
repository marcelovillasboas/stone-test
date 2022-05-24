import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;
const dbURI = MONGODB_URI;

mongoose.connect(dbURI!);

const database = mongoose.connection;

export const db = database;

export default {};
