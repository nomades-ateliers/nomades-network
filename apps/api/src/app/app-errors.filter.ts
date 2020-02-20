
import * as lodash from 'lodash';
import { ExceptionFilter, Catch, HttpException, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { environment } from '../environments/environment';


const isString = (value: any): value is string => lodash.isString(value);

interface ICustomError { 
  statusCode: number,
  error: any,
  message: string
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // console.log('YYYYY', exception);
    // get executing ctx
    const ctx = host.switchToHttp();
    // get response
    const response = ctx.getResponse<Response>();
    // get request
    const request = ctx.getRequest<Request>();
    // get handle status
    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    // get error options
    let error = exception instanceof HttpException
      ? exception.getResponse() as ICustomError
      : null;
    if (!error && exception && exception.message)
      error = exception.message;
    if (!error && exception && (exception as any).error)
      error = (exception as any).error;
    // extract message from error
    const msg = (isString(error))
      ? error
      : (error || {message: null}).message ||
        (error || {error: null}).error ||
        (error || {error: {message: null}}).error.message ||
        'error server';
    // formating data response
    const data = {
      status,
      message: msg,
      path: request.url,
      userToken: (request as any).decoded,
      method: request.method,
      options: {
        body: request.body,
        query: request.query,
      },
      timestamp: new Date().toISOString(),
      debug: !environment.production ? exception.stack : null,
    };
    return response.status(status).jsonp(data);
  }

}