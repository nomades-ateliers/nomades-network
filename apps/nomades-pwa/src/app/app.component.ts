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

  private async _initializeApp() {
    // init notif service to prevent error offline mode
    await this._notifyService.init();
    // handle platform ready to display install msg
    this._platform.ready().then(() => {
      // handle install application message
      this._notifyService.installApp();
    });
  }
}
