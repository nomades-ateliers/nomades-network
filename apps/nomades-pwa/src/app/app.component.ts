import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NotifyService } from './core/services/notify/notify.service';

@Component({
  selector: 'nomades-network-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly _platform: Platform,
    private readonly _notifyService: NotifyService
  ) {
    this._initializeApp();
  }

  private _initializeApp() {
    this._platform.ready().then(platform => {
      // handle install application message
      this._notifyService.installApp(platform || window.navigator.userAgent.toLowerCase());
    });
  }
}
