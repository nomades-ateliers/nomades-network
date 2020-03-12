import { Controller, Get, Query, Post, UseInterceptors, UploadedFiles, UploadedFile } from '@nestjs/common';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// libs
import { APIResponse } from '@nomades-network/api-interfaces';
// app
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { ApiConsumes, ApiBody, ApiProperty } from '@nestjs/swagger';
import { XLSService } from './services/xls.service';
import { editFileName } from './app.utils';

class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly _xls: XLSService
  ) {}

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

  @Post('upload_bdd')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Student exel bdd',
    type: FileUploadDto,
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: __dirname + '/assets',
        filename: editFileName,
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(xlsx)$/)) {
          return callback(new Error('Only xlsx files are allowed!'), false);
        }
        callback(null, true);
      }
    }),
  )
  async uploadedFile(@UploadedFile() file) {
    const result = this._xls.excelToJson(file.path);
    const sheet = Object.keys(result)[0];
    const students = this._xls.normalize(result[sheet]);    
    return {status: 200, message: 'Success import student database', students};
  }
}

