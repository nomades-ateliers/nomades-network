import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// libs
import { UiModule } from '@nomades-network/ui';


// app
import { MainRoutingModule } from './main-routing.module';
import { CONTAINERS } from './containers';
import { SharedPipeModule } from '@nomades-network/core/pipes';
import { UsersStoreModule } from '@nomades-network/ngrx/lib/users/users-store.module';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  providers: [],
  imports: [
    IonicModule,
    UiModule,
    MainRoutingModule,
    UsersStoreModule,
    SharedPipeModule
  ]
})
export class MainModule { }
