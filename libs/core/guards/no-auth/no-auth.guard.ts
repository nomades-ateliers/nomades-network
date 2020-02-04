import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly store: Store<any>
  ) {}

  canActivate()  {
    // // Dispatch check auth action
    this.store.dispatch({type: Auth.AuthActions.CHECK_AUTH});
    // Check Auth on store select
    return this.store
      .pipe(
        select(state => state),
        tap(state => console.log(state)),
        // map((state) =>
        //   (state.currentUser)
        //     ? state
        //     : Object.assign({}, state, {loading: false})
        // ),
        // filter((state) => state.loading === false ),
        map((state) => {
          
          if (!state.auth) {
            return true;
          }
          this.router.navigate(['/index']);
          return false;
        }),
        take(1)
      );
  }
}