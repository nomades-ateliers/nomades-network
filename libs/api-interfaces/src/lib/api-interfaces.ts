import { IUser } from './users';

export * from './users';

export interface Message {
  message: string;
}

export interface APIResponse {
  currentUser?: IUser,
  users?: IUser[]
  message?: string;
  error?: any
}
