import { Injectable } from '@nestjs/common';
import { Message, APIResponse } from '@nomades-network/api-interfaces';

@Injectable()
export class AppService {
  getData(): APIResponse {
    return { statusCode: 200, message: 'Welcome to api!' };
  }
}
