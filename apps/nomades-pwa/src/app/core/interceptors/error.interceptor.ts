import { Injectable, Inject } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ErrorClientService } from '../services/errors/error-client.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private _router: Router,
    @Inject(ErrorClientService) private _errorClient: ErrorClientService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      // retry(1),
      catchError(err => this.handleError(err))
    );
  }

  public handleError = (exeption: HttpErrorResponse) => {
    const {finalUrl: url = '', extractedUrl = ''} = this._router.getCurrentNavigation() || {} ;
    // create exeption case 
    console.log('-----',  exeption.error.statusCode, extractedUrl.toString());
       
    const case1 = 
      // url.toString().includes('auth') ||
      (extractedUrl || '').toString().includes('auth') ||
      (extractedUrl || '').toString() === ''
     && exeption.error.statusCode === 401;
    if (!case1){
      this._errorClient.displayError(exeption.error);
    }
    return throwError(exeption);
  }

}