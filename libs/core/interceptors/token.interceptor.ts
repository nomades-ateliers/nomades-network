import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// libs
import { environment } from '../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const Authorization = localStorage.getItem(environment.authToken);
    if (!Authorization) {
      return next.handle(request).pipe(
        this._saveToken(),
        catchError(this.handleError)
      );
    }
    request = request.clone({
      setHeaders: {
        Authorization
      }
    });
    return next.handle(request).pipe(
      this._saveToken(),
      catchError(this.handleError)
    );
  }

  public handleError = (error: Response) => {
    if (error.status === 401)
      localStorage.removeItem(environment.authToken);
    return throwError(error);
  }

  private _saveToken() {
    return map((event: HttpEvent<any>) => {
      
      if (event instanceof HttpResponse) {
        if (event.body.token) {
          // if (!environment.production) console.log('save token--->>>', event.body.token);
          localStorage.setItem(environment.authToken, event.body.token);
        }
      }
      return event;
    });
  }
}