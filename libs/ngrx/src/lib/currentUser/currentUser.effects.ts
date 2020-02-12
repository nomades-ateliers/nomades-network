import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// libs
import { UserService } from '@nomades-network/core/services'; 
// app
import * as CurrentUser from '../currentUser/currentUser.actions';
import { ICurrentUserState } from './currentUser.reducer';
import { switchMap, catchError } from 'rxjs/operators';
import { of, concat } from 'rxjs';

@Injectable()
export class CurrentUserEffects {
  constructor(
    private _action$: Actions,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _service: UserService,
    private readonly _store: Store<{
      currentUser: ICurrentUserState;
    }>
  ) {}
  
  @Effect() updateAction$ = this._action$.pipe(
    ofType(CurrentUser.CurrentUserActions.UPDATE),
    switchMap((action: any) => this._service.update(action.payload)),
    switchMap((result) =>
      result.currentUser
        ? of(new CurrentUser.UpdateCurrentUserSuccessAction(result))
        : this._handleErrors(result as any)
    ),
    catchError((err: any) => of(new CurrentUser.ErrorAction(err)))
  );

  private _handleErrors(err = { message: null }) {
    return concat(
      of(new CurrentUser.ErrorAction(err))
    );
  }
}