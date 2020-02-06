import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// libs
import { IUser } from '@nomades-network/api-interfaces';
// app
import * as currentuser from './currentUser.actions';
import { ICurrentUserState } from './currentUser.reducer';
import { NgRxStoreService } from '../ngrx.store.service';
import { AppState } from '../app.state';

@Injectable()
export class CurrentUserStoreService extends NgRxStoreService {
  protected STATE = 'currentUser';

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchLogoutAction(): void {
    this.dispatchAction(new currentuser.LogoutAction());
  }

  // prevent error implementation of unused methodes
  dispatchCreateAction(record:  Partial<IUser>): void {}
  dispatchLoadAction(params: { path: string }): void {}
  dispatchUpdateAction(record:  Partial<IUser>): void {}
  dispatchRemoveAction(id: string | number): void {}

  getCurrentUser(): Observable<ICurrentUserState> {
    return this.storeSelectFeatureState().pipe(
      map((state: ICurrentUserState) => {
        return state;
      })
    );
  }

}