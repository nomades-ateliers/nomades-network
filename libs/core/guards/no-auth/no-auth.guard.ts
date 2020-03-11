import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, take, tap, catchError, switchMap } from 'rxjs/operators';
import * as Auth from '@nomades-network/ngrx/lib/auth/auth.actions';
import { Observable, of } from 'rxjs';
import { environment } from '@nomades-network/core/environments/environment';
import { HttpClient } from '@angular/common/http';
import { APIResponse } from '@nomades-network/api-interfaces';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(
    private _http: HttpClient,
    public router: Router
  ) {
  }
   
  canActivate(
  ) {
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
          return this._redirectMain('User is auth, redirect to main...' as any).toPromise();
        }
        return of(true)
      }),
      catchError(err => {
        if (err &&  err.statusCode && err.statusCode !== 200 && !err.user || !err.toString().includes('User is auth'))
          return of(true)
        // redirect to wallet module
        return this._redirectMain(err);
      })
    );
  }

  private _redirectMain(err: Error): Observable<false> {
    if (!environment.production) console.log('[NoAuthGuard]: ', err);
    this.router.navigateByUrl('/')
    return of(false);
  }
}