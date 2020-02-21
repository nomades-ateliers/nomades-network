import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, } from 'rxjs/operators';
import { of, concat } from 'rxjs';
import { isArray } from 'util';
// libs
import { UserService } from '@nomades-network/core/services';
// app
import * as Users from './users-store.actions';

@Injectable()
export class UsersStoreEffects {
  constructor(
    private _action$: Actions,
    private _users: UserService
  ) {}

  @Effect() searchAction$ = this._action$.pipe(
    ofType(Users.UsersStoreActions.SEARCH),
    switchMap((action: any) => this._users.search(action.payload)),
    switchMap((result) =>
      result && result.users && isArray(result.users)
        ? of(new Users.SearchSuccessAction(result))
        : this._handleErrors(result as any)
    ),
    catchError((err: any) => of(new Users.ErrorAction(err)))
  );


  private _handleErrors(err = { message: null }) {
    return concat(
      of(new Users.ErrorAction(err))
    );
  }
}