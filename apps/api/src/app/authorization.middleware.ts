import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';

// app
import { checkAuthentication } from './app.utils';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
      const isAuth = await checkAuthentication(req);
      if (!isAuth) 
        throw new UnauthorizedException('You need to be authenticated to access this part of the API');
      next();
  }
}
