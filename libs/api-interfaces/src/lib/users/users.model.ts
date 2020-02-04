import { IUser } from './users.interface';
import { ITraining } from '../training';
import { IAddress } from '../address';

export class User implements IUser {
  public _id?: string;
  public uid?: string;
  public email: string;
  public firstname?: string;
  public lastname?: string;
  public created?: number;
  // datas
  public desc?: string;
  public job?: string;
  public skills?: {_id?: string; name?: string}[];
  public contact?: IAddress;
  public trainings?: (ITraining & {
    cerfifiedState?: string;
    certifiedProject?: string
  })[];
  
  constructor(params: Partial<IUser>) {
    Object.assign(this, params);
  }
}