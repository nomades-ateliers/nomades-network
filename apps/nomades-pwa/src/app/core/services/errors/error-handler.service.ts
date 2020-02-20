import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http'
import { ErrorClientService } from './error-client.service';

@Injectable({
  providedIn: 'root'
}) 
export class ErrorHandlerService implements ErrorHandler {

  constructor(private readonly _injector: Injector) { }

  async handleError(error: any) {
    const errorService = this._injector.get(ErrorClientService);
    if (Error instanceof HttpErrorResponse) {
      console.log(error.status);
    }
    else {
      // display error with service
      await errorService.displayError(error);
    }
  }
}