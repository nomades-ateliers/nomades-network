import { Injectable } from '@angular/core';import { HttpClient } from '@angular/common/http';
// libs
import { IUser, APIResponse, IAuth } from '@nomades-network/api-interfaces';
// core

@Injectable()
export class UserService {

  public apiAuthServicePath = '/auth';
  public apiUserServicePath = '/users';

  constructor(    
    private readonly _http: HttpClient
    ) {
  }

  async getCurrentUser(): Promise<Partial<IUser>> {
    return this._requestAPI();
  }

  async updateAuth(data: Partial<IAuth>): Promise<APIResponse> {
    return await this._http.post(`${this.apiAuthServicePath}/${data._id}`, data)
               .pipe()
               .toPromise()
               .catch(err => err);
  };

  async updateUser(data: Partial<IUser>): Promise<APIResponse> {
    return await this._http.put(`${this.apiUserServicePath}/${data._id}`, data)
               .pipe()
               .toPromise()
               .catch(err => err);
  };

  private async _requestAPI() {
    return await this._http.get('/users/isauth').pipe(
        // tap(res => console.log(res)  )
      )
      .toPromise()
      .then((data: APIResponse) => (data && data.currentUser)
        ? data.currentUser
        : null
      ).catch(err => err);
  }
}
