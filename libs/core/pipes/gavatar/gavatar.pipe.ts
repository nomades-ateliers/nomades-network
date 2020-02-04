import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { BehaviorSubject, Observable } from 'rxjs';

@Pipe({
  name: 'gavatar'
})
export class GavatarPipe implements PipeTransform {

  private _sub$: BehaviorSubject<string> = new BehaviorSubject(null);
  public sub$: Observable<string> = this._sub$.asObservable();

  transform(data: {email?: string, avatar?: string, logo?: string}): Observable<string> {
    const { avatar = null, logo = null, email = ''} = data || {};
    const url = (avatar || logo)
      ? this._getBase64Img(avatar || logo)
      : this._getGravatar(email);
      this._preload(url);
    return this.sub$;
    // return await this._preload(url).catch(err => err);
  }

  private _getBase64Img(base64: string): string {
    return `data:image/gif;base64,${(base64) ? base64 : 'R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='}`;
  }

  private _getGravatar(email: string): string {
    const emailHash = Md5.hashStr(email.trim().toLowerCase());
    return `http://www.gravatar.com/avatar/${emailHash}`;
  }

  private _preload(url: string): void{
    const img = new Image();
    img.src = url;
    img.addEventListener('load', () => this._sub$.next(url));
    img.addEventListener('error', () => this._sub$.next(this._getBase64Img(null)));
  }
}
