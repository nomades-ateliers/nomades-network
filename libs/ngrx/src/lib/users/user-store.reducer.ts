import { UsersStoreActions, TUsersStoreActions } from './users-store.actions';
import { IUser, APIResponse } from '@nomades-network/api-interfaces';

export interface IUsersState extends Array<IUser> {}
export const intitialState: IUsersState = null;

export function reducer(
  state: IUsersState = intitialState,
  action: TUsersStoreActions
): IUsersState {
  // extract api response data
  const {payload: {users = null} = {statusCode: null}}: {payload?: APIResponse} = action;
  // run reducer to update state  
  switch (action.type) {

    case UsersStoreActions.LOAD_SUCCESS: 
    case UsersStoreActions.SEARCH_SUCCESS: {
      return (users) ? users : intitialState;
    }

    case UsersStoreActions.ERROR: 
      return intitialState;

    default: {
      return state || intitialState;
    }
  }
}