import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// libs
import { APIResponse, IUser, IAuth } from '@nomades-network/api-interfaces';
import { environment } from '@nomades-network/core/environments/environment';
import { TrainingService } from '../training/training.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiAuthServicePath = environment.apiEndpoint + '/api/auth';
  public apiUserServicePath = environment.apiEndpoint + '/api/users';

  constructor(
    private _http: HttpClient,
    @Inject(TrainingService) private _trainingService: TrainingService
  ) {
  }

  update(data: Partial<IUser>): Observable<APIResponse> {
    return this._http
      .put<APIResponse>(environment.apiEndpoint + '/api/users/' + data._id, data)
      .pipe(
        map(res => res || null),
        // tap(state => console.log('--- service: ',state)),
        catchError(res =>
          of({
            statusCode: (res || {}).statusCode || 500,
            error: res,
            message:
              (res.error || {}).message ||
              res.message ||
              'Upodate user failed!'
          })
        )
      );
  }

  getUserById(id: string): Observable<IUser> {
    return this._http.get<APIResponse>(environment.apiEndpoint + '/api/users/' + id).pipe(
      map(response => (response.users)
        ? response.users.find(u => u._id === id)
        : null
      )
    )
  }

  getTtrainingsList() {
    return this._trainingService.get();
  }

  search(query: string) {
    return this._http.get<APIResponse>(environment.apiEndpoint + '/api/users/search?query=' + query).pipe() 
  }
}