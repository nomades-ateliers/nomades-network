import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// libs

// app
import * as auth from './auth.actions';
import { IAuthState } from './auth.reducer';
import { NgRxStoreService } from '../ngrx.store.service';
import { AppState } from '../app.state';
import { IUser } from '@nomades-network/api-interfaces';
// import { ICurrentUserState } from './currentUser.reducer';

@Injectable()
export class AuthStoreService extends NgRxStoreService {
  protected STATE = 'authCheck';

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchCheckAuthAction(): void {
    this.dispatchAction(new auth.CheckAuthAction());
  }

  dispatchLoginAction(record: Partial<IUser>): void {
    this.dispatchAction(new auth.LoginAction(record));
  }

  dispatchLogoutAction(): void {
    this.dispatchAction(new auth.LogoutAction());
  }

  dispatchCreateAction(record:  Partial<IUser>) {
    this.dispatchAction(new auth.CreateAction(record));
  }

  dispatchTokenSaveAction(): void {
    this.dispatchAction(new auth.TokenSaveAction());
  }

  dispatchTokenDeleteAction(): void {
    this.dispatchAction(new auth.TokenDeleteAction());
  }

  // prevent error implementation of unused methodes
  dispatchLoadAction(params: { path: string }): void {}
  dispatchUpdateAction(record:  Partial<IUser>): void {}
  dispatchRemoveAction(id: string | number): void {}

  getAuthCheck(): Observable<IAuthState> {
    return this.storeSelectFeatureState().pipe(
      map((state: IAuthState) => {
        return state;
      })
    );
  }

  isAuthenticated(): IAuthState {
    let isAuthenticated: IAuthState = false;
    this.getAuthCheck().subscribe(isAuth => (isAuthenticated = isAuth));
    return isAuthenticated;
  }
}