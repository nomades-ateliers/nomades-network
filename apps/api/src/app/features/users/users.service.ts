import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';

// libs
import { APIResponse, IUser, IAuth, User } from '@nomades-network/api-interfaces';

// app
import { getToken } from '../../app.utils';
import { environment } from '../../../environments/environment';

interface ICreatedObject {auth?: IAuth, currentUser?: IUser};

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Auth') private readonly authModel: Model<IAuth & Document>,
    @InjectModel('User') private readonly userModel: Model<IUser & Document>,
  ) {}


  private async _resetSave({auth, currentUser}: ICreatedObject) {
    if (auth) await this.authModel.findByIdAndDelete({_id: auth._id})
    if (currentUser) await this.userModel.findByIdAndDelete({_id: currentUser._id})
  }

  private _comparePassword(docPassword: string, password: string): boolean {
    if (!docPassword) {
      return false;
    }
    return bcrypt.compareSync(  password , docPassword);
  }
  
  async login(data: Partial<IUser & IAuth>): Promise<APIResponse> {
    // handle params errors
    if (!data || !data.email || !data.password)
      throw new BadRequestException();
    const currentUser = await this.userModel.findOne({email: data.email}).catch(err => err);
    if (!currentUser || !currentUser.uid) 
      throw new NotFoundException('User not exite. Try other email.');
    // find user pwd into Auths.Collection
    const {password = null} = await this.authModel.findOne({_id: currentUser.uid}).catch(err => err);
    // compar Password
    if (!this._comparePassword(
      password,
      data.password
    ))
      throw new UnauthorizedException('Password not valid!');
    // generate token
    const token = getToken(
      environment.secretToken,
      60 * 1000,
      currentUser
    );
    return {
      statusCode: 200,
      message: 'User loged',
      currentUser,
      token
    };
  }

  async create(data: Partial<IUser & IAuth>): Promise<APIResponse> {
    const created: ICreatedObject = {};
    if (!data.email || !data.password)
      throw new BadRequestException();
    // generate pwd hash
    let hash = '';
    try {
      hash = bcrypt.hashSync(data.password, 10);
    } catch (err) {
      throw new HttpException(
        err,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    // create data in Auth Collection
    const auth = await new this.authModel({
      email: data.email,
      password: hash
    }).save().catch(err => err)
    if (!auth._id || auth instanceof Error)
      throw new HttpException(auth.errmsg || auth, HttpStatus.INTERNAL_SERVER_ERROR);
    // memory save auth
    created.auth = auth;
    // create User in User Collection
    const currentUser = await new this.userModel(
      new User({...data, uid: auth._id})
    ).save().catch(err => err);
    if (!currentUser._id || currentUser instanceof Error){
      this._resetSave(created);
      throw new HttpException(currentUser.errmsg || currentUser, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    created.currentUser = currentUser;
    // generate token
    const token = getToken(
      environment.secretToken,
      60 * 1000,
      currentUser
    );
    // return response
    return {statusCode: 200, currentUser, token};
  }

  async getCurrentUser(uid: string): Promise<APIResponse>  {
    // return {currentUser: null, statusCode: 200}
    const currentUser = await this._getByUID(uid) //.catch(err => err);
    return {statusCode: 200, currentUser} 
  }

  async getUserById(id: string): Promise<APIResponse>  {
    const user = await this._getByID(id).catch(err => err);
    if (!user || user instanceof Error)
      throw new NotFoundException();
    return {statusCode: 200, users: [user]} 
  }

  private async _getByID(_id: string): Promise<IUser> {
    const user = await this.userModel.findOne({_id}).then(res => res.toObject()).catch(err => err);
    if (!user) 
      throw new NotFoundException();
    return user
  } 

  private async  _getByUID(uid: string): Promise<IUser> {
    const user = await this.userModel.findOne({uid}).then(res => res.toObject()).catch(err => err);
    if (!user) 
      throw new NotFoundException();
    return user
  } 

  async update(data: Partial<IUser>, requestUID: string): Promise<APIResponse> {
    const findUser = await this.userModel.findOne({_id: data._id}).catch(err => err);
    if (!findUser) 
      throw new NotFoundException();
    if (requestUID.toString() !== findUser.uid.toString())
      throw new ForbiddenException('User ID not match'); 
    const currentUser = await this.userModel.findOneAndUpdate({
      _id: data._id
    }, {$set: new User({
      ...findUser.toObject(),
      ...data
    })}, { new: true, runValidators: true}).exec().catch(err => err);
    // handle error
    if (!currentUser || !currentUser._id || currentUser instanceof Error)
      throw new HttpException(
        currentUser.errmsg || currentUser.message || currentUser,
        HttpStatus.BAD_REQUEST
      );
    return {statusCode: 200, currentUser};
  }
}
