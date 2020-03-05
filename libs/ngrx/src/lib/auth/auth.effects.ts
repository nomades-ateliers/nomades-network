import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Router, ActivatedRoute } from '@angular/router';
import { Store, select, Action } from '@ngrx/store';
import { switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators';
import { of, concat } from 'rxjs';
// libs
import { AuthService } from '@nomades-network/core/services';
// app
import { IAuthState } from './auth.reducer';
import * as Auth from './auth.actions';
import * as CurrentUser from '../currentUser/currentUser.actions';
import { ICurrentUserState } from '../currentUser/currentUser.reducer';

@Injectable()
export class AuthEffects {
  constructor(
    private _action$: Actions,
    private _auth: AuthService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<{
      auth: IAuthState;
    }>
  ) {}

  @Effect() loginAction$ = this._action$.pipe(
    ofType(Auth.AuthActions.LOGIN),
    switchMap((action: any) => this._auth.doAuth(action.payload)),
    switchMap((result) =>
      result.currentUser
        ? of(new Auth.LoginSuccessAction(result))
        : this._handleErrors(result as any)
    ),
    catchError((err: any) => of(new Auth.ErrorAction(err)))
  );

  @Effect() checkMainAction$ = this._action$.pipe(
    ofType(Auth.AuthActions.CHECK_AUTH),
    withLatestFrom(
      this._store.pipe(select(state => state['currentUser']))
    ),
    switchMap((res: [Action, ICurrentUserState]) => {
      const [action, currentUser = null] = res;
      // console.log('-effect: ', currentUser);
      
      return this._auth.isAuth(action['payload']);
    }),
    switchMap((res) =>
      res.currentUser
        ? concat(
            of(
              new Auth.CheckAuthSuccessAction(res),
              new CurrentUser.LoadSuccessAction({currentUser: res.currentUser}),
            )
          )
        : concat(
            of(
              new Auth.CheckAuthNoUserSuccessAction()
            )
          )
    ),
    tap(_=> console.log('in effect ...')),
    catchError((res: any) => this._handleErrors(res))
  );

  @Effect() logoutAction$ = this._action$.pipe(
    ofType(Auth.AuthActions.LOGOUT),
    switchMap(() => this._auth.doLogout()),
    switchMap(action =>
      concat(
        of(
          new Auth.TokenDeleteAction(),
          new Auth.LogoutSuccessAction()
        )
      )
    ),
    switchMap((res: any) => {
      this._router.navigate(['/auth']);
      return of(res);
    }),
    catchError((err: any) => this._handleErrors(err))
  );

  @Effect() createUserAction$ = this._action$.pipe(
    ofType(Auth.AuthActions.CREATE),
    switchMap((action: any) => this._auth.doCreateUser(action.payload)),
    switchMap(result =>
      result.currentUser
        ? of(
            new Auth.CreateSuccessAction(result),
            new CurrentUser.LoadSuccessAction({currentUser: result.currentUser}),
          )
        : this._handleErrors(result as any)
    ),
    catchError((err: any) => this._handleErrors(err))
  );

  @Effect() createUserSuccessAction$ = this._action$.pipe(
    ofType(Auth.AuthActions.CREATE_SUCCESS),
    switchMap((action: any) => (action && action.payload)
      ? 
        of(
          new Auth.TokenSaveSuccessAction(action.payload),
          new Auth.CheckAuthAction()
        )
      : this._handleErrors({message: 'No payload or no user data on payload'})
    ),
    tap(async _ => {
      await this._router.navigate([`./confirme`]).catch(err=> err);
      // await this._router.navigate([`./`]).catch(err=> err);
    }),
    catchError((err: any) => this._handleErrors(err)),
  );

  @Effect() userSuccessAction$ = this._action$.pipe(
    ofType(
      // Auth.AuthActions.CREATE_SUCCESS,
      Auth.AuthActions.LOGIN_SUCCESS,
      // CurrentUser.CurrentUserActions.LOAD_SUCCESS
    ),
    switchMap((action: any) => {
      const { payload = null } = action;
      return payload
        ? concat(
            of(new Auth.TokenSaveSuccessAction(payload)),
            of(new Auth.CheckAuthAction())
          )
        : this._handleErrors();
    }),
    catchError((err: any) => this._handleErrors(err)),
    tap(_ => {
      const returnUrl = this._route.snapshot.queryParams['returnUrl'] || '';
      this._router.navigate([`/index`]);
      // this._router.navigate([`/${returnUrl ? returnUrl : 'index'}`]);
    })
  );

  private _handleErrors(err = { message: null }) {
    return concat(
      of(new Auth.ErrorAction(err))
    );
  }
}