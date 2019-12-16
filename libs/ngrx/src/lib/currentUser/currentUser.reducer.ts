// libs

// app
import { TCurrentUserActions, CurrentUserActions } from './currentUser.actions';

// tslint:disable-next-line:no-empty-interface
export interface ICurrentUserState {}
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
      return Object.assign({}, action.payload.user);
    }
    case CurrentUserActions.ERROR: {
      return intitialState;
    }
    default: {
      return <ICurrentUserState>state;
    }
  }
}