import { IUser } from './users';

export * from './users';

export interface Message {
  message: string;
}

export interface APIResponse {
  statusCode: number;
  currentUser?: IUser;
  users?: IUser[];
  token?: string;
  message?: string;
  error?: any
}
