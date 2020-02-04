import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgrxModule } from '@nomades-network/ngrx/index';
import { AppRoutingModule } from './app-routing.module';
// libs
import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
import { NoAuthGuard } from '@nomades-network/core/guards/no-auth/no-auth.guard';
// app
import { CoreModule } from './core/core.module';

const GUARDS = [
  AuthGuard,
  NoAuthGuard
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    NgrxModule,
    AppRoutingModule,
  ],
  providers: [
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
