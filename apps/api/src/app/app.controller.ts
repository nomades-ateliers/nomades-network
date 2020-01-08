import { Controller, Get } from '@nestjs/common';
// libs
import { APIResponse } from '@nomades-network/api-interfaces';
// app
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  welcome(): APIResponse {
    return this.appService.getData();
  }
  
  @Get('hello')
  getData(): APIResponse {
    return this.appService.getData();
  }
}
