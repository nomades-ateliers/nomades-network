import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// libs
import { NgrxModule } from '@nomades-network/ngrx/index';
import { CurrentUserStoreModule } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.module';

import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
import { NoAuthGuard } from '@nomades-network/core/guards/no-auth/no-auth.guard';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ErrorHandlerService } from './core/services/errors/error-handler.service';

const GUARDS = [
  AuthGuard,
  NoAuthGuard
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    NgrxModule,
    CurrentUserStoreModule,
    IonicModule.forRoot({mode: 'md'}),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
