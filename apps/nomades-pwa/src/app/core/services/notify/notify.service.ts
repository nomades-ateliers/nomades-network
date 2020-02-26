import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { ToastButton } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private toastController: ToastController
  ) { }

  public async init() {
     // display invisible toast to load file component
    // to prevent error on offline mode
    await this.toastController.create({duration: 1, animated: false, cssClass: ['hidden']}).then(t => t.present()); 
  }

  public async show(message: string, duration?: number, buttons?: ToastButton[]) {
    const toast = await this.toastController.create({
      message,
      duration,
      buttons: buttons || [{
        text: 'ok',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await toast.present();
  }

  public installApp(platform?: string) {
    console.log('installApp on: ', platform);
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }
    // Detects if device is in standalone mode
    const isStandalone = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    if (isIos() && !isStandalone()) {
      this.show(`Appuyez sur "Partager" dans le panneau inférieur de votre navigateur, puis sur "Ajouter à l'écran d'accueil" pour installer l'application Native et ainsi accélérer le chargement. `, 100000);
    }
  }


}