import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap, catchError, switchMap } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';
import { Observable, of } from 'rxjs';
import { environment } from '@nomades-network/core/environments/environment';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '@nomades-network/api-interfaces';
import { AppState } from '@nomades-network/ngrx/lib/app.state';
import { ICurrentUserState } from '@nomades-network/ngrx/lib/currentUser/currentUser.reducer';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private _http: HttpClient,
    public router: Router,
    private _store: Store<AppState & {currentUser: ICurrentUserState}>
  ) {
  }
   
  canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
  ) {
    console.log('[NO AUTH GUARD]');
    return this._requestStore(route, routerState);
    // return this._requestApi();
  }

  private _requestStore(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    const { returnUrl = routerState.url } = route.queryParams;
    // Dispatch check auth action
    this._store.dispatch({type: '[Auth] Check Auth Requested'});
    // Check Auth on store select
    return this._store
      .pipe(
        select(state => state),
        filter((state) => state.loading === false),
        map((state) => {
          if (!state.currentUser) {
            console.warn('[NoGuard] user not auth');
            return true;
          }
          if (!state.currentUser.verified){
            this.router.navigateByUrl('../confirme')
            return true;
          }
          if (state.currentUser.verified && !state.currentUser.authorized){
            this.router.navigateByUrl('../confirme')
            return true;
          }
          // return this._redirectMain().toPromise();
       
          console.warn('[NoGuard] user is auth');
          (returnUrl && !returnUrl.includes('auth'))
            ? this.router.navigate([returnUrl])
            : this.router.navigate(['network']);
          return false;
        }),
        take(1)
      );
  }
  private _requestApi() {
    return this._http.get(environment.apiEndpoint + '/api/users/isAuth').pipe(
      take(1),
      switchMap((res: APIResponse) => {
        // handle incorrect response API and redirect to wallet
        if (res && res.statusCode && res.statusCode === 200 &&  res.currentUser){
          if (!res.currentUser.verified){
            this.router.navigateByUrl('../confirme')
            return of(false);
          }
          if (res.currentUser.verified && !res.currentUser.authorized){
            this.router.navigateByUrl('../confirme')
            return of(false);
          }
          return this._redirectMain().toPromise();
        }
        return of(true)
      }),
      catchError(err => {
        if (err &&  err.statusCode && err.statusCode !== 200 && !err.user || !err.toString().includes('User is auth'))
          return of(true)
        // redirect to wallet module
        return this._handleError(err);
      })
    );
  }
  private _redirectMain(): Observable<false> {
    this.router.navigateByUrl('/network')
    return of(false);
  }

  private _handleError(err: Error): Observable<false> {
    if (!environment.production) console.log('[NoAuthGuard]: ', err);
    this.router.navigateByUrl('/network')
    return of(false);
  }
}