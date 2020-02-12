import { Schema, Document } from 'mongoose';

export const userSkillSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  level: Number
});
