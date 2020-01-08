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
}