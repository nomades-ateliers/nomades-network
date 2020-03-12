import { Module, RequestMethod } from '@nestjs/common';
import { RouteInfo, MiddlewareConsumer } from '@nestjs/common/interfaces';
import { MulterModule } from '@nestjs/platform-express';
import { MailerModule } from '@nest-modules/mailer';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// app
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XLSService } from './services/xls.service';
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
];

const mongooseOptions: MongooseModuleOptions = {
  
  // fix mongoose deprecated warning
  // doc: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

@Module({
  imports: [

    MongooseModule.forRoot(environment.getDBHost(), mongooseOptions),
    // MongooseModule.forRootAsync({
    //   useFactory: () => {
    //     console.log('check db url connection: -------', environment.getDBHost());
    //     return <MongooseModuleOptions>{
    //       uri: environment.getDBHost(),
    //       useNewUrlParser: true,
    //       useUnifiedTopology: true,
    //       useCreateIndex: true,
    //     }
    //   },
    // }),
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: `smtps://${environment.mailer.user}:${environment.mailer.pass}@${environment.mailer.host}`,
        // defaults: {
        //   from:'"nest-modules" <modules@nestjs.com>',
        // },
        // template: {
        //   dir: __dirname + '/templates',
        //   adapter: new HandlebarsAdapter(), // or new PugAdapter()
        //   options: {
        //     strict: true,
        //   },
        // },
      }),
    }),
    MulterModule.register({
      dest: __dirname + '/assets',
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    XLSService
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes(...PROTECTED_ROUTES);
  }
}
