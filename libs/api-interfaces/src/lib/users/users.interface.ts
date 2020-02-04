import { IAddress } from '../address';
import { ITraining } from '../training';

export interface IAuth {
  _id: string;
  password: string;
};

export interface IUser {
  _id?: string;
  uid?: string;
  email: string;
  firstname?: string;
  lastname?: string;
  created?: number;
  // datas
  avatar?: string;
  desc?: string;
  job?: string;
  skills?: {_id?: string; name?: string}[];
  contact?: IAddress;
  trainings?: (ITraining & {
    cerfifiedState?: string;
    certifiedProject?: string
  })[];
}