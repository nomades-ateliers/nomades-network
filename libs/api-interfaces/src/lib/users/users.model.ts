import { IUser } from './users.interface';

export class User implements IUser {
  public _id?: string;
  public email: string;
  public created?: number;

  constructor(params: Partial<IUser>) {
    Object.assign(this, params);
  }
}