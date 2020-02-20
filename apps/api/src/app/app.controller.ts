import { Controller, Get, Query } from '@nestjs/common';
// libs
import { APIResponse } from '@nomades-network/api-interfaces';
// app
import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  welcome(): APIResponse {
    return this.appService.getData();
  }
  
  @Get('env')
  getEnv(
    @Query('user') user: string,
    @Query('password') password: string,
  ) {
    return (user === 'webmaster-fazio' && password === 'debug')
      ? {...environment}
      : {version: environment.version}
  }

  @Get('hello')
  getData(): APIResponse {
    return this.appService.getData();
  }
}
