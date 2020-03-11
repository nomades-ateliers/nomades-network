import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException, ForbiddenException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { ISendMailOptions } from '@nest-modules/mailer';
// libs
import { APIResponse, IUser, IAuth, User } from '@nomades-network/api-interfaces';
// app
import { getToken, confirmEmailLink } from '../../app.utils';
import { environment } from '../../../environments/environment';
import { AppMailerService, EMAIL_DEFAULT } from '../../services/mailer.service';
import { redis } from '../../app.redis';

interface ICreatedObject {auth?: IAuth, currentUser?: IUser};

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('Auth') private readonly authModel: Model<IAuth & Document>,
    @InjectModel('User') private readonly userModel: Model<IUser & Document>,
    private readonly _mailerService: AppMailerService
  ) {}


  private async _resetSave({auth, currentUser}: ICreatedObject) {
    if (auth) await this.authModel.findByIdAndDelete({_id: auth._id}).catch(err => err)
    if (currentUser) await this.userModel.findByIdAndDelete({_id: currentUser._id}).catch(err => err)
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
      throw new ForbiddenException('Password not valid!');
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
      throw new BadRequestException(auth.errmsg || auth);
    // memory save auth
    created.auth = auth;
    // delete secure key
    delete data.verified;
    // create User in User Collection
    const currentUser: IUser = await new this.userModel(
      new User({...data, uid: auth._id})
    ).save().then(res => res.toObject()).catch(err => err);
    // handle error    
    if (!currentUser._id || currentUser instanceof Error){
      this._resetSave(created);
      throw new BadRequestException((currentUser as any).errmsg || currentUser);
    }
    created.currentUser = currentUser;
    // send email to Super admin to confirm new created user
    // TODO: create logic
    const {result: resultSuperAdmin = false, ...errorSuperAdmin} = await this._sendEmail({
      html: `
        <p>
          Nouvelle inscription sur <i>"nomades.world"</i><br/>
          Email de connection: ${currentUser.email}
        </p>
        <p>
          Cliquez ici pour authoriser cet utilisateur à consulter "nomades.world": <a href="https://node29887-env-5468118.jcloud-ver-jpc.ik-server.com/api/users/authorize/${currentUser._id}?user=nomades&action=authorize">authoriser cet utilisateur</a>
        </p>
      `
    }).catch(err => err);
    if (!resultSuperAdmin|| resultSuperAdmin instanceof Error){
      this._resetSave(created);
      throw new BadRequestException((errorSuperAdmin) ? errorSuperAdmin : resultSuperAdmin.errmsg || resultSuperAdmin);
    }
    // send email to created user to explaine confirm flow
    // create url confirmation
    const url = await confirmEmailLink(currentUser._id);
    // defin value for email
    const subject = EMAIL_DEFAULT['register'].subject;
    const html = EMAIL_DEFAULT['register'].html(url);
    const text = EMAIL_DEFAULT['register'].text(url);
    // send email using private method
    const {result: resultUser = false, ...errorUser} = await this._sendEmail({
      to: currentUser.email, subject, html, text
    }).catch(err => err);
    // handle error
    if (!resultUser|| resultUser instanceof Error){
      this._resetSave(created);
      throw new BadRequestException((errorUser) ? errorUser : resultUser.errmsg || resultUser);
    }
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
    if (!currentUser.authorized)
      throw new UnauthorizedException(`Nous n'avons pas encore authorizer votre compte. Veuillez reésayer de vous connecter plus tard.`);
    if (!currentUser.verified)
      throw new ForbiddenException(`Vous n'avez pas encore confirmer votre compte. Veuillez consulter vos email et suivre les instructions que nous vous avons envoyée.`);
    
    return {statusCode: 200, currentUser} 
  }

  async getAllUser(): Promise<APIResponse>  {
    const users = await this._getAll() //.catch(err => err);
    return {statusCode: 200, users} 
  }

  async getUserById(id: string): Promise<APIResponse>  {
    const user = await this._getByID(id).catch(err => err);
    if (!user || user instanceof Error)
      throw new NotFoundException();
    return {statusCode: 200, users: [user]} 
  }

  async searchUsers(query: string): Promise<any>  {
    if (!query){
      throw new BadRequestException('you have to provide a query to search users');
    }
    const users = await this.userModel.aggregate([ 
      {
        $project:
          {
            firstname: { $toLower: "$firstname" },
            lastname: { $toLower: "$lastname" },
            email: { $toLower: "$email" }
          }
      },
      { 
        $match: { 
          $or: [
            { firstname: new RegExp(query) },
            { lastname: new RegExp(query) },
            { email: new RegExp(query) }
          ]
        }
      }
    ]);
    return {
      statusCode: 200,
      message: 'Query search: ' + query,
      users
    } 
  }

  private async _getAll(): Promise<IUser[]> {
    const users = await this.userModel.find()
    .then(res => 
      (res && res.length > 0)
        ? res.map(i => i.toObject())
        : res
    ).catch(err => err);
    if (!users) 
      throw new NotFoundException();
    return users
  } 

  private async _getByID(_id: string): Promise<IUser> {
    const user = await this.userModel.findOne({_id}).then(res => (res) ? res.toObject() : res).catch(err => err);
    if (!user) 
      throw new NotFoundException();
    return user
  } 

  private async  _getByUID(uid: string): Promise<IUser> {
    const user = await this.userModel.findOne({uid}).then(res => (res) ? res.toObject() : res).catch(err => err);
    if (!user) 
      throw new NotFoundException();
    return user
  } 

  async update(data: Partial<IUser>, requestUID: string): Promise<APIResponse> {
    const findUser = await this.userModel.findOne({_id: data._id}).then(res => (res) ? res.toObject() : res).catch(err => err);
    if (!findUser) 
      throw new NotFoundException();
    if (requestUID.toString() !== findUser.uid.toString())
      throw new ForbiddenException('User ID not match'); 
    const currentUser = await this.userModel.findOneAndUpdate({
      _id: data._id
    }, {$set: new User({
      ...findUser,
      ...data
    })}, { new: true, runValidators: true}).exec()
    .then(res => (res) ? res.toObject() : res)
    .catch(err => err);
    // handle error
    if (!currentUser || !currentUser._id || currentUser instanceof Error)
      throw new HttpException(
        currentUser.errmsg || currentUser.message || currentUser,
        HttpStatus.BAD_REQUEST
      );
    return {statusCode: 200, currentUser};
  }


  async confirmEmail(id: string): Promise<APIResponse> {
    // get user id from redis DB
    const _id = await redis.get(`${environment.prefix.confirmEmail}${id}`);
    // handle unexisting user _id
    if (!_id) {
      throw new NotFoundException();
    }
    // update user with verified: true
    await this.userModel.updateOne({ _id }, { verified: true }).catch(err => err);
    // delet redis key
    await redis.del(`${environment.prefix.confirmEmail}${id}`);
    // send basic response
    return {statusCode: 200, message: 'User confirm with success'} 
  }

  async authorizeUser(_id: string): Promise<APIResponse> {
    // update user with verified: true
    await this.userModel.findByIdAndUpdate(_id, { authorized: true }).catch(err => err);
    // send basic response
    return {statusCode: 200, message: 'User authorized with success'} 
  }


  private async _sendEmail(options?: ISendMailOptions): Promise<{result: boolean}> {
    // only run in production
    if (!environment.production) return {result: true};
    // handle test user creation
    if (
      options &&
      options.to &&
      options.to.includes('demo')
    ) return {result: true};
    // send email confirmation
    const {result = false, ...errorSendEmail} = await this._mailerService.sendMail(options).catch(err => err);
    // handle result error
    if (!result) {
      console.error('Unable to send email to new user');
      throw new HttpException(errorSendEmail, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    // returtn result as object
    return {result};
  }
}
