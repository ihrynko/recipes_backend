import { Schema, model } from 'mongoose';
import { TUser } from '../types';

const userSchema = new Schema<TUser>(
{
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String },
  },
  { versionKey: false, timestamps: true }
);




export default model('User', userSchema);