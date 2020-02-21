import { Component, OnInit } from '@angular/core';

// libs
import { UsersStoreService } from '@nomades-network/ngrx/lib/users/users-store.service';
import { IUser } from '@nomades-network/api-interfaces';
import { Observable, BehaviorSubject } from 'rxjs';


@Component({
  selector: 'nomades-network-main-default-page',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-menu-button slot="start"></ion-menu-button>
        <ion-title color="primary" *ngIf="!isSearching">Communauté</ion-title>
        <ion-buttons slot="end" *ngIf="!isSearching">
          <ion-button (click)="isSearching = !isSearching">
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
      <!-- searchbar -->
      <ion-searchbar 
          #searchItemBar
          *ngIf="isSearching"
          slot="start"
          debounce="800"
          (ionChange)="search($event)"
          showCancelButton="focus"
          placeholder="Rechercher un utilisateur"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <!-- content for feed -->
      <ion-grid *ngIf="!isSearching">
        <ion-row>
          <ion-col>
            data feed
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- content for search result -->  
      <ion-grid *ngIf="isSearching && users$|async as users">
        <ion-row *ngIf="users?.length > 0">
          <ion-col>
            <ion-list>
              <ion-list-header>
                <ion-label>Liste des utilisateurs</ion-label>
              </ion-list-header>
              <ion-item *ngFor="let user of users">
                <ion-avatar slot="start">
                  <ion-img [src]="user | gavatar | async"></ion-img>
                </ion-avatar>
                <label>
                  {{user?.firstname}} {{user?.lastname}}
                </label>
              </ion-item>
            </ion-list>
          </ion-col>
        </ion-row>  
        <ion-row *ngIf="users?.length <= 0">
          <ion-col>
            <ion-text>
              <p>pas d'utilisateurs touvé corresondant à votre critère de recherche.
            </ion-text>
          </ion-col>
        </ion-row>      
      </ion-grid>
    </ion-content>
  `,
  styles: [``]
})
export class MainDefaultPageComponent  implements OnInit {
  
  isSearching = false;
  users$: Observable<IUser[]>;

  constructor( 
    private _store: UsersStoreService
  ) {
  }
  
  ngOnInit() {

  }

  async search($event: CustomEvent) {
    const {detail: { value = null} = {}} = $event;
    // search user with included query in username
    if (!value || value.length === 0)
      return this.isSearching = false;
    console.log('search--->', value);
    this._store.dispatchSearchAction(value);
    this.users$ = this._store.getUsers();
  }
}