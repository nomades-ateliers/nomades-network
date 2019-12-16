import { NgModule } from '@angular/core';

// libs
import { UiModule } from '@nomades-network/ui';
import { AuthStoreModule } from '@nomades-network/ngrx/lib/auth/auth-store.module';
import { CurrentUserStoreModule } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.module';

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
    UiModule,
    CurrentUserStoreModule,
    AuthStoreModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
