import { NgRxAction } from '../ngrx.actions';
import { IUser, APIResponse } from '@nomades-network/api-interfaces';

/**
 * PATTERN DESIGN:
 * Simply add special word to your action definition.
 * Exemple:
 * - Using "Requested" to OPEN global application loader (modal spinner)
 * - Using "Success" to CLOSE global application loader (modal spinner)
 */
export const CurrentUserActions = {
  LOAD_SUCCESS: '[CurrentUser] load user Success',
  UPDATE: '[CurrentUser] update user Requested',
  UPDATE_SUCCESS: '[CurrentUser] update user Success',
  ERROR: '[CurrentUser] Error',
  LOGOUT: '[Auth] Logout',
  LOGOUT_SUCCESS: '[Auth] Logout Success',
};

export class LoadSuccessAction extends NgRxAction<{currentUser: IUser}> {
  type = CurrentUserActions.LOAD_SUCCESS;
}
export class UpdateCurrentUserAction extends NgRxAction<any> {
  type = CurrentUserActions.UPDATE;
}
export class UpdateCurrentUserSuccessAction extends NgRxAction<any> {
  type = CurrentUserActions.UPDATE_SUCCESS;
}

export class LogoutAction extends NgRxAction<any> {
  type = CurrentUserActions.LOGOUT;
}
export class LogoutSuccessAction extends NgRxAction<APIResponse> {
  type = CurrentUserActions.LOGOUT_SUCCESS;
}
export class ErrorAction extends NgRxAction<any> {
  type = CurrentUserActions.ERROR;
}

export type TCurrentUserActions =
  | LoadSuccessAction
  | UpdateCurrentUserAction
  | UpdateCurrentUserSuccessAction
  | ErrorAction;
