import { Component, OnInit } from '@angular/core';

// libs
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { IUser } from '@nomades-network/api-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'nomades-network-main-default-page',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-button slot="start"></ion-menu-button>
        <!-- <ion-title>Nomades Network</ion-title> -->
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-text color="primary">
        <h1>Communauté Page</h1>
      </ion-text>
    </ion-content>
  `,
  styles: [``]
})
export class MainDefaultPageComponent  implements OnInit {
  
  currentUser$: Observable<IUser>;

  constructor( 
    private _store: CurrentUserStoreService
  ) {
  }
  
  ngOnInit() {
    console.log('hello main page');
    this.currentUser$ = this._store.getCurrentUser();
  }
}