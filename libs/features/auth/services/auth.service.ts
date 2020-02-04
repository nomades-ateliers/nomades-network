import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// libs
import { APIResponse } from '@nomades-network/api-interfaces';

@Injectable()
export class AuthService {
  private readonly _isAuthUrl: string =   '/api/users/isauth';
  private readonly _loginUrl: string =    '/api/users/login';
  private readonly _signUpUrl: string =   '/api/users/create';

  constructor(private _http: HttpClient) {
  }

  /**
   * Methode to deconnect user. Will trigge dellToken()
   */
  doLogout(): Observable<any> {
    return this.dellToken();
  }

  isAuth(loadUserData = false): Observable<APIResponse> {
    return this._http
      .get<APIResponse>(this._isAuthUrl + (loadUserData ? '?loadUserData=true' : ''))
      .pipe(
        map(res => res || null),
        // tap(state => console.log('--- service: ',state)),
        catchError(res =>
          of({
            statusCode: (res || {}).statusCode || 500,
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
      .post<APIResponse>(this._loginUrl, {
        email: _creds.email,
        password: _creds.password
      })
      .pipe(
        catchError(res =>
          of({
            statusCode: (res || {}).statusCode || 500,
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
    return this._http.post<APIResponse>(this._signUpUrl, _payload).pipe(
      catchError(res =>
        of({
          statusCode: (res || {}).statusCode || 500,
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