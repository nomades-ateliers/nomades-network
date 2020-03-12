import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// libs
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { IUser } from '@nomades-network/api-interfaces';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@nomades-network/core/services';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'nomades-network-confirme-page',
  template: `
    <ion-content class="ion-padding">
      <h1>Création de compte</h1>
      <div *ngIf="!confirm">
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
        <ion-button [routerLink]="'/auth'">retour au login</ion-button>
      </div>
      <div *ngIf="confirm">
        <ion-button [routerLink]="'/auth'">retour au login</ion-button>
      </div>
    </ion-content>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmePageComponent  implements OnInit {
  
  confirm: boolean;
  currentUser$: Observable<IUser>;

  constructor( 
    private _store: CurrentUserStoreService,
    private readonly _api: AuthService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _ionicAlertCtrl: AlertController
  ) {
  }
  
  async ngOnInit() {
    console.log('hello main page');
    this.currentUser$ = this._store.getCurrentUser();

    // handle navigation query params
    const {queryParams: {token = null} = null} = this._route.snapshot;
    if (!token){
      return 
    }
    this.confirm = true;
    // checkt validation with backend api
    const validat = await this._requestValidation(token);
    // display correct message
    (!validat)
      ? await this._displayResult('Erreur', `<p>Une erreur est survenue lors du procecus de validation de votre compte.</p><p>Veuillez prendre contact avec le support technique pour résoudre ce problème.</p>`)
      : await this._displayResult('Confirmation', `<p>Votre compte à correctement été validé</p>`);
  }

  private async _requestValidation(token: string): Promise<boolean> {
    const result = await this._api.confirm(token).catch(err => err);
    if (result instanceof Error)
      return false;
    if (!result || result.statusCode !== 200)
      return false;
    if (result.statusCode === 200)
      return true;
  }

  private async _displayResult(header: string, message: string) {
    // TODO: replace with dispatch Error action
    // build alert
    const ionAlert = await this._ionicAlertCtrl.create({
      header,
      message,
      buttons: [{
        text: 'ok'
      }] 
    });
    // display alert
    await ionAlert.present();
    // wait till dismiss
    await ionAlert.onWillDismiss();
    // and redirect to main entry point
    this._router.navigate(['../']);
  }
}