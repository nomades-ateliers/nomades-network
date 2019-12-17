// libs
import { IUser, User, APIResponse } from '@nomades-network/api-interfaces';

// app
import { TCurrentUserActions, CurrentUserActions } from './currentUser.actions';

// tslint:disable-next-line:no-empty-interface
export interface ICurrentUserState extends IUser {}
export const intitialState: ICurrentUserState | null = null;

export function reducer(
  state: ICurrentUserState | null = intitialState,
  action: TCurrentUserActions
): ICurrentUserState | null {
  switch (action.type) {

    case CurrentUserActions.LOAD_SUCCESS:
    case CurrentUserActions.UPDATE_SUCCESS: {
      if (!action.payload.user) {
        return state;
      }
      return new User(Object.assign({}, (action.payload as APIResponse).currentUser));
    }
    case CurrentUserActions.ERROR: {
      return intitialState;
    }
    default: {
      return <ICurrentUserState>state;
    }
  }
}