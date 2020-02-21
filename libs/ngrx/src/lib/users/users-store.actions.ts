
// app
import { IUsersState } from './user-store.reducer';
import { NgRxAction } from '../ngrx.actions';
// app
import { APIResponse } from '@nomades-network/api-interfaces';

/**
 * PATTERN DESIGN:
 * Simply add special word to your action definition.
 * Exemple:
 * - Using "Requested" to OPEN global application loader (modal spinner)
 * - Using "Success" to CLOSE global application loader (modal spinner)
 */
export const UsersStoreActions = {
  LOAD: '[Users] Load users Requested',
  LOAD_SUCCESS: '[Users] Load users Success',
  SEARCH: '[Users] Search users Requested',
  SEARCH_SUCCESS: '[Users] Search users Success',
  ERROR: '[Users] Error'
};

export class LoadAction extends NgRxAction<any> {
  type = UsersStoreActions.LOAD;
}
export class LoadSuccessAction extends NgRxAction<APIResponse> {
  type = UsersStoreActions.LOAD_SUCCESS;
}

export class SearchAction extends NgRxAction<any> {
  type = UsersStoreActions.SEARCH;
}
export class SearchSuccessAction extends NgRxAction<APIResponse> {
  type = UsersStoreActions.SEARCH_SUCCESS;
}

export class ErrorAction extends NgRxAction<any> {
  type = UsersStoreActions.ERROR;
}

export type TUsersStoreActions =
  | LoadAction
  | LoadSuccessAction
  | SearchAction
  | SearchSuccessAction
  | ErrorAction;