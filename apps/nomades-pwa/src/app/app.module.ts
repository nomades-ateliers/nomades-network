import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// libs
import { NgrxModule } from '@nomades-network/ngrx/index';
import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
import { NoAuthGuard } from '@nomades-network/core/guards/no-auth/no-auth.guard';
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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
    IonicModule.forRoot({mode: 'md'}),
    AppRoutingModule,
  ],
  providers: [
    ...GUARDS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
