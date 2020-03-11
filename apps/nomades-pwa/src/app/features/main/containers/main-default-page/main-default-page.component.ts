import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
// libs
import { IUser } from '@nomades-network/api-interfaces';
import { UsersStoreService } from '@nomades-network/ngrx/lib/users/users-store.service';

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
      <div *ngIf="users$|async as users">
        <!-- content for feed -->
        <ion-grid *ngIf="!isSearching">
          <ion-row>
            <ion-col>
              <!-- list of all users -->
              <ion-list>
                <ion-item 
                    (click)="navTo(user?._id)"
                    *ngFor="let user of users"
                    detail="true">
                  <!-- <ion-avatar slot="start">
                    <ion-img [src]="user | gavatar | async"></ion-img>
                  </ion-avatar> -->
                  <label>
                    <p>
                      <span *ngIf="user?.firstname?.length > 1">{{user?.firstname}} {{user?.lastname}}<br/></span>
                      <small>{{user?.email}}</small>
                    </p> 
                  </label>
                </ion-item>
              </ion-list>
            </ion-col>
          </ion-row>
        </ion-grid>
        <!-- content for search result -->  
        <ion-grid *ngIf="isSearching && users">
          <ion-row *ngIf="users?.length > 0">
            <ion-col>
              <ion-list>
                <ion-list-header>
                  <ion-label>Liste des utilisateurs</ion-label>
                </ion-list-header>
                <ion-item
                    (click)="navTo(user?._id)"
                    *ngFor="let user of users"
                    detail="true">
                  <!-- <ion-avatar slot="start">
                    <ion-img [src]="user | gavatar | async"></ion-img>
                  </ion-avatar> -->
                  <label>
                    <p>
                      <span *ngIf="user?.firstname?.length > 1">{{user?.firstname}} {{user?.lastname}}<br/></span>
                      <small>{{user?.email}}</small>
                    </p> 
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
      </div>
    </ion-content>
  `,
  styles: [``]
})
export class MainDefaultPageComponent  implements OnInit {
  
  isSearching = false;
  users$: Observable<IUser[]>;

  constructor( 
    private _store: UsersStoreService,
    private _router: Router
  ) {
  }
  
  ngOnInit() {
    this._store.dispatchLoadAction();
    this.users$ = this._store.getUsers();
  }

  async search($event: CustomEvent) {
    const {detail: { value = null} = {}} = $event;
    // search user with included query in username
    if (!value || value.length === 0){
      this._store.dispatchLoadAction();
      return this.isSearching = false;
    }
    // dispatch rx action
    this._store.dispatchSearchAction(value);
  }

  async navTo(userId: string) {
    // use router in place of [routerLink] caus it not work
    this._router.navigate(['/network/user/' + userId])
  }
}