import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
// libs
import { environment } from '@nomades-network/core/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErrorClientService {

  isDisplayed: boolean;

  constructor(
    private _ionicAlertCtrl: AlertController
  ) {
    this.isDisplayed = false;
  }

  async displayError(error: {message?: any}) {
    if (!environment.production) console.log('[Error]: ', error);
    const message = await this._formatingMessage(error);
    await this._display(message);
  }

  async _formatingMessage(error: {message?: any}) {
    let message = '';
    switch(true) {
      // is string error
      case error.constructor === String: {        
        message = `<li>${error}</li>`;;
        break;
      }
      // have `message` prop with string error
      case error.message && error.message.constructor === String: {
        message = `<li>${error.message}</li>`;
        break;
      }
      // have `message` prop with string error
      case error.message && error.message.constructor === Object: {
        Object.entries(error.message).forEach(([key, value]) => {
          message += `<li>[${key}]: ${value}</li>`;
        });
        break;
      }
      // have `message` prop with Array of error object
      case error.message && Array.isArray(error.message): {
        error.message.map((err: any) => {
          Object.entries(err.constraints).forEach(([key, value]) => {
            message += `<li>[${key}]: ${value}</li>`;
          });
        });
        break;
      }
      default: 
        message = `Merci de redemarer l'application`;
    }
    return `<ul>${message}</ul>`;
  }

  async _display(message?: string) {
    if (this.isDisplayed)
      return;
    const ionAlert = await this._ionicAlertCtrl.create({
      header: 'Erreur',
      message: message || `Merci de redemarer l'application`
    });
    await ionAlert.present().then(()=> this.isDisplayed = true);
    ionAlert.onDidDismiss().then(()=> this.isDisplayed = false);
    // dispatch error to slack error feed using api error reporting url
  }
}
