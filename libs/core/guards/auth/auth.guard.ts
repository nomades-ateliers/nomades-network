import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap, catchError } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '@nomades-network/core/environments/environment';
import { APIResponse } from '@nomades-network/api-interfaces';
import { Observable, of } from 'rxjs';
// import { AuthStoreService } from '@nomades-network/ngrx/lib/auth/auth-store.service';
import { AppState } from '@nomades-network/ngrx/lib/app.state';
import { ICurrentUserState } from '@nomades-network/ngrx/lib/currentUser/currentUser.reducer';


@Injectable()
export class AuthGuard   implements CanActivate {

  constructor(
    private _http: HttpClient,
    public router: Router,
    // private _storeService: AuthStoreService,
    private _store: Store<AppState & {currentUser: ICurrentUserState}>
  ) {
  }
   
  canActivate(
  ) {
    console.log('[AUTH GUARD]');
    // const Authorization = localStorage.getItem(environment.authToken);
    return this._requestStore();
  }

  private _requestStore() {
    // this._storeService.dispatchCheckAuthAction();
    this._store.dispatch({type: Auth.AuthActions.CHECK_AUTH})
    // return this._http.get(environment.apiEndpoint + '/api/users/isauth').pipe(
    return this._store.select(s => s).pipe(
      // take(1),
      map((state) =>
        (state.currentUser)
          ? state
          : Object.assign({}, state, {loading: false})
      ),
      filter((state) => state.loading === false ),
      map((res) => this._runLogic(res.currentUser)),
      catchError(err => {
        // redirect to login module
        return this._redirectAuthPage(err);
      })
    );
  }

  private _requestAPI() {
    return this._http.get(environment.apiEndpoint + '/api/users/isauth').pipe(
      take(1),
      map((res: APIResponse) => this._runLogic(res.currentUser)),
      catchError(err => {
        // redirect to login module
        return this._redirectAuthPage(err);
      })
    );
  }

  private _runLogic(res: ICurrentUserState) {
    // handle incorrect response API
    if (res){
      if (!res.verified || !res.authorized){
        this.router.navigateByUrl('../confirme')
        return false;
      }
      return true;
    }
    // console.log('check..', res);
    return false;
    // throw new Error('Incorrect API response')
  }

  private _redirectAuthPage(err: Error): Observable<false> {
    if (!environment.production) console.log('[AuthGuard] _redirectAuthPage: ', err);
    this.router.navigateByUrl('/auth')
    return of(false);
  }

}