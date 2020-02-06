import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// libs
import { UiModule } from '@nomades-network/ui';
import { CurrentUserStoreModule } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.module';


// app
import { MainRoutingModule } from './main-routing.module';
import { CONTAINERS } from './containers';
import { SharedPipeModule } from '@nomades-network/core/pipes';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  providers: [],
  imports: [
    IonicModule,
    UiModule,
    CurrentUserStoreModule,
    MainRoutingModule,
    SharedPipeModule
  ]
})
export class MainModule { }
