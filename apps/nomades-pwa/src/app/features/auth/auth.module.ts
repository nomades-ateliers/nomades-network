import { NgModule } from '@angular/core';

// app
import { AuthRoutingModule } from './auth-routing.module';
import { CONTAINERS } from './containers';
import { UiModule } from '@nomades-network/ui';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  imports: [
    UiModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
