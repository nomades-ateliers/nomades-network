
import { Injectable, Inject } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from} from 'rxjs';
import { finalize, catchError, delay, switchMap, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
// core

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  loader: HTMLIonLoadingElement;
  isloading: boolean;
  severStarted = false;

  request: HttpRequest<any>[] = [];

  constructor(
    @Inject(LoadingController) public loadingCtrl: LoadingController
  ) {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // disable loader for reporting client
    if (request.url.includes('repporting'))
      return next.handle(request);
    // else return request
    return from(this.presentLoading(request)).pipe(
      delay(500),
      switchMap(() => next.handle(request)),
      tap((event) => {
        console.log('XXXXX', event);
        
        if (event instanceof HttpResponse) {
          this.closeLoading();
        }
      }),
      finalize(async () =>  {
        await this.closeLoading()
      }),
      // handle error to close loader if existing
      catchError((error: HttpErrorResponse) => {
        this.closeLoading()
        return throwError(error);
      })
    );
  }

  async presentLoading(req: HttpRequest<any>) {
    if (this.request.length > 0) return;
    this.request.push(req);
    // build option loader
    const opts = (!navigator.onLine || this.severStarted)
      ? {duration: 5000, cssClass: 'default-loader'}
      : {cssClass: 'default-loader'};
    // console.log('befor DISPLAY');
    this.loader = await this.loadingCtrl.create(opts);
    // only display if resquest length <== 0
    if (this.request.length === 1) await this.loader.present();
    // console.log('-- xx presentLoading---', this.request.length);
    this.severStarted = true;
  }

  async closeLoading() {
    this.request.pop(); 
    if (this.loader && this.request.length === 0){
      await this.loader.dismiss();
    } 
  }
}