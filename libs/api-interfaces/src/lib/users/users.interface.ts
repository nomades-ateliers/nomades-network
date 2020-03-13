import { IAddress } from '../address';
import { ITraining } from '../training';

export interface IAuth {
  _id: string;
  password: string;
};

export interface IUserSkill {
  _id?: string;
  name: string;
  level?: number
}

export interface IUser {
  _id?: string;
  uid?: string;
  email: string;
  firstname?: string;
  lastname?: string;
  created?: number;
  // toggle authorization
  authorized?: boolean;
  verified?: boolean;
  // datas
  avatar?: string;
  desc?: string;
  job?: string;
  bday?: Date;
  student_number?: number;
  student_year?: number;
  mobile_phone?: string;
  skills?: IUserSkill[];
  contact?: IAddress;
  trainings?: (ITraining & {
    cerfifiedState?: number;
    certifiedProject?: string
  })[];
}