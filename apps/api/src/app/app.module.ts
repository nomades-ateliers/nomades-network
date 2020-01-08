import { Module, RequestMethod } from '@nestjs/common';
import { RouteInfo, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { MongooseModule } from '@nestjs/mongoose';
// app
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { AuthorizationMiddleware } from './authorization.middleware';
// app/features
import { UsersModule } from './features/users/users.module';

const PROTECTED_ROUTES: RouteInfo[] = [
  {
    path: '/users/isAuth',
    method: RequestMethod.GET
  },
  {
    path: '/users/:id',
    method: RequestMethod.PUT
  }
]
@Module({
  imports: [
    MongooseModule.forRoot(environment.getDBHost()),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes(...PROTECTED_ROUTES);
  }
}
