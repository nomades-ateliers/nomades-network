import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IonMenu } from '@ionic/angular';
// libs
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { IUser } from '@nomades-network/api-interfaces';

@Component({
  selector: 'nomades-network-main-page',
  template: `
    <ion-split-pane contentId="menu-content">
      <!--  our side menu  -->
      <ion-menu #menu contentId="menu-content">
        <ion-content>
          <ion-card *ngIf="currentUser$|async as user">
            <ion-card-header>
              <ion-avatar>
                <ion-img [src]="user | gavatar | async"></ion-img>
              </ion-avatar>
            </ion-card-header>
            <ion-card-content>
              <ion-text *ngIf="user?.firstname || user?.lastname; else noData">
                <p>{{user?.firstname}} {{user?.lastname}} </p>
              </ion-text>
              <div *ngIf="user?.job" [innerHTML]="user?.job"></div>
              <ng-template #noData>
                <ion-text >
                  <p>{{user?.email}} </p>
                </ion-text>         
              </ng-template>
            </ion-card-content>
          </ion-card>
          <ion-list>
            <ion-item (click)="navTo('', menu)">
              <ion-label>Communauté</ion-label>
            </ion-item>
            <ion-item disabled="true" (click)="navTo('slack', menu)">
              <ion-label>Slack</ion-label>
            </ion-item>
            <ion-item disabled="true" (click)="navTo('mandats', menu)">
              <ion-label>Mandats</ion-label>
            </ion-item>
            <ion-item disabled="true" (click)="navTo('events', menu)">
              <ion-label>Events</ion-label>
            </ion-item>
            <ion-item (click)="navTo('user', menu)">
              <ion-label>Mon profil</ion-label>
            </ion-item>
            <ion-item disabled="true" (click)="navTo('signin_pro', menu)">
              <ion-label>Devenir membre</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
        <ion-footer>

          <ion-item (click)="logout(menu)">
            <ion-label>Logout</ion-label>
          </ion-item>
          
        </ion-footer>
      </ion-menu>

      <!-- the main content -->
      <ion-router-outlet id="menu-content"></ion-router-outlet>
    </ion-split-pane>
    
  `,
  styles: [`
    ion-card {
      box-shadow: none !important;
    } 
  `],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent  implements OnInit {
  
  currentUser$: Observable<IUser>;

  constructor( 
    private readonly _store: CurrentUserStoreService,
    private readonly _router: Router
  ) {
  }
  
  ngOnInit() {
    this.currentUser$ = this._store.getCurrentUser();
  }

  public navTo(path: string, menu: IonMenu) {
    (!path)
      ? this._router.navigate(['./'])
      : this._router.navigate(['./'+ path]);
    menu.close();
  }

  public logout(menu: IonMenu) {
    this._store.dispatchLogoutAction();
    menu.close();
  }
}