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

  public async show(message: string, duration: number = 5000, buttons?: ToastButton[]) {
    const toast = await this.toastController.create({
      message,
      duration,
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    });
    await toast.present();
  }

  public installApp(platform: string) {
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }
    // Detects if device is in standalone mode
    const isStandalone = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    if (isIos() && !isStandalone()) {
      this.show('To install App tap ⬤ then "Add to Home Screen"', 10000);
    }
  }


}