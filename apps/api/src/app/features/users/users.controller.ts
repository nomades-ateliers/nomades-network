import { Controller, Get, Post, BadRequestException, Req, Body, UnauthorizedException, Put, Param, HttpException, Query } from '@nestjs/common';
import { Request } from 'express';

// libs
import { APIResponse, IUser } from '@nomades-network/api-interfaces';

// app
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService
  ) {}

  @Get('')
  async getAllUsers(
    @Req() req: Request
  ): Promise<APIResponse> {
    // check token
    const user = (req as any).decoded;
    // handle error
    if (!user || !user.uid) throw new UnauthorizedException();
    // return response    
    return this.userService.getAllUser();
  }

  @Get('isAuth')
  async isAuth(
    @Req() req: Request
  ): Promise<APIResponse> {
    // check token
    const user = (req as any).decoded;
    // handle error
    if (!user || !user.uid) throw new UnauthorizedException();
    // return response
    return this.userService.getCurrentUser(user.uid);
  }

  @Get('search')
  async searchUsers(
    @Req() req: Request,
    @Query('query') value: string,
  ): Promise<APIResponse> {
    console.log('xxxxx', value);
    
    // check token
    const user = (req as any).decoded;
    // handle error
    if (!user || !user.uid) throw new UnauthorizedException();
    if (!value) throw new HttpException('No query in request', 404);
    // return response    
    return this.userService.searchUsers(value.toLowerCase());
  }

  @Get(':id')
  async getById(
    @Req() req: Request,
    @Param('id') id: string,
  ): Promise<APIResponse> {
    // check token
    const user = (req as any).decoded;
    // handle error
    if (!user || !user.uid) throw new UnauthorizedException();
    if (!id) throw new HttpException('No user id in request', 404);
    // return response    
    return this.userService.getUserById(id);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ): Promise<APIResponse> {
    // handle error
    if (!email || !password) 
      throw new BadRequestException('Invalide request parameters');
    // return response
    return await this.userService.login({email, password});
  }

  @Post('create')
  async create(
    @Body() user: {email: string, password: string}
  ): Promise<APIResponse> {
    // handle error
    if (!user || !user.email || !user.password) 
      throw new BadRequestException('Invalide request parameters');
    // return response
    return await this.userService.create({...user});
  }

  @Put(':id')
  async update(
    @Body() user: Partial<IUser>,
    @Req() req: Request
  ): Promise<APIResponse> {
    // check token
    const userToken: Partial<IUser> = (req as any).decoded;
    // handle error
    if (!user || !user._id) 
      throw new BadRequestException('Invalide request parameters');
    // return response
    return await this.userService.update(user,  userToken.uid);
  }

}
