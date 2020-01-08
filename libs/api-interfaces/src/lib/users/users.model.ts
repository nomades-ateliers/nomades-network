import { IUser } from './users.interface';

export class User implements IUser {
  public _id?: string;
  public uid?: string;
  public email: string;
  public firstname?: string;
  public lastname?: string;
  public created?: number;

  constructor(params: Partial<IUser>) {
    Object.assign(this, params);
  }
}