import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// libs
import { APIResponse, IUser, IAuth } from '@nomades-network/api-interfaces';
import { environment } from '@nomades-network/core/environements/environment';
import { TrainingService } from '../training/training.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiAuthServicePath = '/auth';
  public apiUserServicePath = '/users';

  constructor(
    private _http: HttpClient,
    @Inject(TrainingService) private _trainingService: TrainingService
  ) {
  }

  update(data: Partial<IUser>): Observable<APIResponse> {
    return this._http
      .put<APIResponse>('/api/users/' + data._id, data)
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

  getTtrainingsList() {
    return this._trainingService.get();
  }

}