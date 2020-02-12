import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// libs
import { UiModule } from '@nomades-network/ui';
import { AuthStoreModule } from '@nomades-network/ngrx/lib/auth/auth-store.module';
// app
import { AuthRoutingModule } from './auth-routing.module';
import { CONTAINERS } from './containers';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  imports: [
    IonicModule,
    UiModule,
    ReactiveFormsModule,
    AuthStoreModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
