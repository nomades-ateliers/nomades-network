import { Schema, Document } from 'mongoose';

export const userTrainingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cerfifiedState: Number,
  certifiedProject: String,
  certifiedProjectUrl: String,
  created: {
    type: Date,
    default: new Date()
  },
});
