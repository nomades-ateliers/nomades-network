import { Schema, Document } from 'mongoose';
import { IUser } from '@nomades-network/api-interfaces';

export const authSchema = new Schema({
  password: {
    type: String,
    require: true,
    // match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    index: true
  }
});

export const userSchema = new Schema<IUser & Document>({
  uid: {
    type: Schema.Types.ObjectId,
    ref: 'auths',
    required: true,
    index: true
  },
  email: {
    type: String,
    require: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    unique: true,
    index: true
  },
  lastname: {
    type: String,
    required: false
  },
  firstname: {
    type: String,
    require: false
  },
  created: {
    type: Date,
    require: false,
    default: new Date()
  },
});