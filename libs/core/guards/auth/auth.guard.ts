import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly store: Store<any>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot)  {
    // Manage redirect link:
    // find existing returnUrl data || routerState.url to create `returnUrl`
    const returnUrl  = routerState.url.indexOf('?') > 0
    ? routerState.url.substring(0, routerState.url.indexOf('?'))
    : routerState.url;
    const { queryParams = null} = route;
    // // Dispatch check auth action
    this.store.dispatch({type: Auth.AuthActions.CHECK_AUTH});
    // Check Auth on store select
    return this.store
      .pipe(
        select(state => state),
        // map((state) =>
        //   (state.currentUser)
        //     ? state
        //     : Object.assign({}, state, {loading: false})
        // ),
        // filter((state) => state.loading === false ),
        map((state) => {
          // console.warn('[AuthGuard] user is auth', queryParams);
          if (state.auth) {
            return true;
          }
          this.router.navigate(['/auth'], {queryParams: {returnUrl: returnUrl, ...queryParams}});
          return false;
        }),
        take(1)
      );
  }
}