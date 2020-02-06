import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// libs
import { UiModule } from '@nomades-network/ui';
import { AuthStoreModule } from '@nomades-network/ngrx/lib/auth/auth-store.module';
// features
import { AuthService } from '@nomades-network/features/auth/services/auth.service';
// app
import { AuthRoutingModule } from './auth-routing.module';
import { CONTAINERS } from './containers';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  providers: [
    AuthService
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
