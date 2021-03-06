import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ErrorsInterceptor } from './app/app-error.interceptor';
import { HttpExceptionFilter } from './app/app-errors.filter';


export const INTERCEPTORS = [
  new ErrorsInterceptor()
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const {globalPrefix = null} = environment;
  app.setGlobalPrefix(globalPrefix);
  // app.use(helmet());
  // app.use(compression());
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(rateLimit({ max: 1000, windowMs: 15 * 60 * 1000 }));
  app.enableCors();
  // http error filter
  app.useGlobalFilters(new HttpExceptionFilter());
  // add global interceptors
  app.useGlobalInterceptors(
    ...INTERCEPTORS,
  );
  // buid api doc
  const options = new DocumentBuilder()
    .setTitle('Nomades Network API Endpoint')
    .setDescription('Nomades Network Server API documentation')
    .setVersion(environment.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(globalPrefix, app, document);
  // start server api
  const {port = null} = environment;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
