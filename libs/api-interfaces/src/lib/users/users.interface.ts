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
  verified?: boolean;
  // datas
  avatar?: string;
  desc?: string;
  job?: string;
  skills?: IUserSkill[];
  contact?: IAddress;
  trainings?: (ITraining & {
    cerfifiedState?: string;
    certifiedProject?: string
  })[];
}