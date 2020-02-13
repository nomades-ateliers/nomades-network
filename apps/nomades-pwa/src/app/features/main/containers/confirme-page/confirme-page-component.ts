import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// libs
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { IUser } from '@nomades-network/api-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'nomades-network-confirme-page',
  template: `
    <ion-content class="ion-padding">
      <h1>Création de compte</h1>
      <p>
        Bien joué - tu y es presque !
        <br/>
        Clique sur le lien que nous t'avons envoyé par mail pour confirmer ton adresse mail.
      </p>
      <p>
        Ensuite il suffit d'attendre que ton compte soit validé.
      </p>
      <p>
        Tu recevera une confirmation par mail.
      </p>
      <ion-button [routerLink]="'../auth'">retour au login</ion-button>
    </ion-content>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmePageComponent  implements OnInit {
  
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