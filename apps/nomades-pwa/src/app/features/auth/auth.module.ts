import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// libs
import { UiModule } from '@nomades-network/ui';
import { AuthStoreModule } from '@nomades-network/ngrx/lib/auth/auth-store.module';
import { CurrentUserStoreModule } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.module';

// features
import { AuthService } from '@nomades-network/features/auth/services/auth.service';

// app
import { AuthRoutingModule } from './auth-routing.module';
import { CONTAINERS } from './containers';
import { ReactiveFormsModule } from '@angular/forms';


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
    CurrentUserStoreModule,
    AuthStoreModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
