import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// libs
import { authSchema, userSchema } from '@nomades-network/api-schemas';
// app
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppMailerService } from '../../services/mailer.service';
import { XLSService } from '../../services/xls.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Auth', schema: authSchema }
    ])
  ],
  providers: [UsersService, AppMailerService, XLSService],
  controllers: [UsersController]
})
export class UsersModule {}
