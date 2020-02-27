import { Module, RequestMethod } from '@nestjs/common';
import { RouteInfo, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// app
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { AuthorizationMiddleware } from './authorization.middleware';
// app/features
import { UsersModule } from './features/users/users.module';

const PROTECTED_ROUTES: RouteInfo[] = [
  {
    path: '/users',
    method: RequestMethod.GET
  },
  {
    path: '/users/isAuth',
    method: RequestMethod.GET
  },
  {
    path: '/users/search',
    method: RequestMethod.GET
  },
  {
    path: '/users/:id',
    method: RequestMethod.PUT
  },
  {
    path: '/users/:id',
    method: RequestMethod.GET
  }
]
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => {
        console.log('check db url connection: -------', environment.getDBHost());
        return <MongooseModuleOptions>{
          uri: environment.getDBHost(),
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        }
      },
    }),
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
