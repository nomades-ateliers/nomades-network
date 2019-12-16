import { Observable, of, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { APIResponse } from '@nomades-network/api-interfaces';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
  private readonly _authUrl: string = '/auth';
  private readonly _isAuthUrl: string = '/auth/isauth';
  private readonly _signUpUrl: string = '/auth/signin';

  constructor(private _http: HttpClient) {
  }

  /**
   * Methode to deconnect user. Will trigge dellToken()
   */
  doLogout(): Observable<any> {
    return this.dellToken();
  }

  isAuth(loadUserData = false): Observable<any> {
    return this._http
      .get(this._isAuthUrl + (loadUserData ? '?loadUserData=true' : ''))
      .pipe(
        map(res => res || {}),
        catchError(res =>
          of({
            error: res,
            message:
              (res.error || {}).message ||
              res.message ||
              'Authentication failed!'
          })
        )
      );
  }

  /**
   * @param _creds Input form email & password
   */
  doAuth(
    _creds: { email: string; password: string } = {
      email: null,
      password: null
    }
  ): Observable<APIResponse> {
    return this._http
      .post(this._authUrl, {
        email: _creds.email,
        password: _creds.password
      })
      .pipe(
        catchError(res =>
          of({
            error: res,
            message:
              (res.error || {}).message ||
              res.message ||
              'Login authentication failed!'
          })
        )
      );
  }

  doCreateUser(_payload: {
    email: string;
    password: string;
  }): Observable<APIResponse> {
    console.log('_payload', _payload);

    return this._http.post(this._signUpUrl, _payload).pipe(
      catchError(res =>
        of({
          error: res,
          message: (res.error || {}).message || res.message || 'Signup failed!'
        })
      )
    );
  }

  /**
   * Methode to remove token from localstorage
   * See doc from `HttpService`
   */
  dellToken(): Observable<void> {
     return from(Promise.resolve(localStorage.removeItem('environment.authToken')));
  }
}