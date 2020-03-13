import { IUser, IUserSkill } from './users.interface';
import { ITraining } from '../training';
import { IAddress } from '../address';

export class User implements IUser {
  public _id?: string;
  public uid?: string;
  public email: string;
  public firstname?: string;
  public lastname?: string;
  public created?: number;
  public verified?: boolean;
  public authorized?: boolean;
  // datas
  public bday?: Date;
  public student_number?: number;
  public student_year?: number;
  public mobile_phone?: string;

  public avatar?: string;
  public desc?: string;
  public job?: string;
  public skills?: IUserSkill[];
  public contact?: IAddress;
  public trainings?: ITraining[];
  
  constructor(params: Partial<IUser>) {
    Object.assign(this, params);
  }
}