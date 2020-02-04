import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// libs
import { SharedPipeModule } from '@nomades-network/core/pipes'
// app
import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { UserService } from './services/user/user.service';
import { UiModule } from '@nomades-network/ui';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    UiModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedPipeModule
  ],
  providers: [
    UserService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }
