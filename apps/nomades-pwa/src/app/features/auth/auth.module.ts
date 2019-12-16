import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app
import { AuthRoutingModule } from './auth-routing.module';
import { CONTAINERS } from './containers';


@NgModule({
  declarations: [
    ...CONTAINERS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
