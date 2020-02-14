import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// libs
import { APIResponse, IUser } from '@nomades-network/api-interfaces';
import { environment } from '@nomades-network/core/environments/environment';
import { ITraining } from 'libs/api-interfaces/src/lib/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private _http: HttpClient) {
  }

  get(): Observable<ITraining[]> {
    return this._http
      .get<any[]>('https://nomades.ch/wp-json/wp/v2/formation')
      .pipe(
        map(res => (res && res.length && res.length > 0)
          ? res.map(i => ({name: i.title.rendered, created: i.date, cursus: i.cursus}))
          :  [] || null
        ),
        // tap(state => console.log('--- service: ',state)),
        // catchError(res =>
        //   of({
        //     statusCode: (res || {}).statusCode || 500,
        //     error: res,
        //     message:
        //       (res.error || {}).message ||
        //       res.message ||
        //       'Get Trainings List failed!'
        //   })
        // )
      );
  }

}