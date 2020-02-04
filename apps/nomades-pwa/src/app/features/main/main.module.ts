import { NgModule } from '@angular/core';

// libs
import { UiModule } from '@nomades-network/ui';
import { CurrentUserStoreModule } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.module';


// app
import { MainRoutingModule } from './main-routing.module';
import { CONTAINERS } from './containers';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  providers: [],
  imports: [
    UiModule,
    CurrentUserStoreModule,
    MainRoutingModule
  ]
})
export class MainModule { }
