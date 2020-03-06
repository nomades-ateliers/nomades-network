import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap, catchError } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '@nomades-network/core/environments/environment';
import { APIResponse } from '@nomades-network/api-interfaces';
import { Observable, of } from 'rxjs';


@Injectable()
export class AuthGuard   implements CanActivate {

  constructor(
    private _http: HttpClient,
    public router: Router,
  ) {
  }
   
  canActivate(
  ) {
    // const Authorization = localStorage.getItem(environment.authToken);
    return this._requestAPI();
  }

  private _requestAPI() {
    return this._http.get(environment.apiEndpoint + '/api/users/isauth').pipe(
      take(1),
      map((res: APIResponse) => {
        // handle incorrect response API
        if (res && res.statusCode && res.statusCode === 200 &&  res.currentUser){
          if (!res.currentUser.verified){
            this.router.navigateByUrl('../confirme')
            return false;
          }
          if (res.currentUser.verified && !res.currentUser.authorized){
            this.router.navigateByUrl('../confirme')
            return false;
          }
          return true;
        }
        throw new Error('Incorrect API response')
      }),
      catchError(err => {
        // redirect to login module
        return this._redirectAuthPage(err);
      })
    );
  }

  private _redirectAuthPage(err: Error): Observable<false> {
    if (!environment.production) console.log('[AuthGuard] _redirectAuthPage: ', err);
    this.router.navigateByUrl('/auth')
    return of(false);
  }

}