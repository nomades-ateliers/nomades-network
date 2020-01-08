import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


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
  // app.useGlobalFilters(new HttpExceptionFilter());
  // add global interceptors
  app.useGlobalInterceptors(
    // ...INTERCEPTORS,
  );
  // buid api doc
  const options = new DocumentBuilder()
    .setTitle('Passpoly API Endpoint')
    .setDescription('The Passpoly API description')
    .setVersion('1.0')
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
