import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// libs
import { IUser } from '@nomades-network/api-interfaces';
// app
import * as usersActions from './users-store.actions';
import { IUsersState } from './user-store.reducer';
import { NgRxStoreService } from '../ngrx.store.service';
import { AppState } from '../app.state';

@Injectable()
export class UsersStoreService extends NgRxStoreService {
  protected STATE = 'users';

  constructor(protected store: Store<AppState>) {
    super();
  }

  dispatchSearchAction(payload: string): void {
    this.store.dispatch(new usersActions.SearchAction(payload))
  }

  dispatchLoadAction(): void {
    this.store.dispatch(new usersActions.LoadAction())
  }

  // prevent error implementation of unused methodes
  dispatchUpdateAction(record:  Partial<IUser>): void {}
  dispatchCreateAction(record:  Partial<IUser>): void {}
  dispatchRemoveAction(id: string | number): void {}

  getUsers() {
    return this.storeSelectFeatureState();
  }

  search(query: string): Observable<IUsersState> {
    return this.storeSelectFeatureState().pipe(
      map((state: IUsersState) => {
        return state.filter(user => {
          if (user.firstname.toLocaleLowerCase().includes(query)) return user;
          if (user.lastname.toLocaleLowerCase().includes(query)) return user;
          if (user.email.toLocaleLowerCase().includes(query)) return user;
        });
      })
    );
  }

}