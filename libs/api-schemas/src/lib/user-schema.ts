import { Schema, Document } from 'mongoose';
import { IUser } from '@nomades-network/api-interfaces';
import { userTrainingSchema } from './user-training.schema';
import { userSkillSchema } from './user-skill.schema';

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
  avatar: String,
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
  contact: {
    street: String,
    street2: String,
    street_number: String,
    zipCode: String,
    city: String,
    state: String,
    country: String,
    countryCode: String,
    default: String,  
  },
  created: {
    type: Date,
    require: false,
    default: new Date()
  },
  desc: String,
  job: String,
  skills: [userSkillSchema],
  trainings: [userTrainingSchema],
  verified: Boolean,
  authorized: Boolean
});