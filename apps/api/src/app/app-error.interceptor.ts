import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';



@Injectable()
export class ErrorsInterceptor implements NestInterceptor {

  constructor() {}
    
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const call$ = next.handle();
    return call$.pipe(
      // tap(() => console.log('INTERCEPT after: ', statusCode)),
      catchError(error => {
        // console.log('INTERCEPT after error: ', error, error.statusCode )
        return throwError(error);
      }),
    );
  }
}