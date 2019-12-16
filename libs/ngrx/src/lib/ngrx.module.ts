import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// libs
import { throwIfAlreadyLoaded } from '@nomades-network/utils';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// app
import { CurrentUserStoreModule } from './currentUser/currentUser-store.module';
import { AuthStoreModule } from './auth/auth-store.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: true, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([])
  ]
})
export class NgrxModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: NgrxModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'NgrxModule');
  }
}
