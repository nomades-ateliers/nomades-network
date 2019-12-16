import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { throwIfAlreadyLoaded } from '@nomades-network/utils';

import * as fromAuth from './auth.reducer';
import { AuthStoreService } from './auth-store.service';
import { AuthEffects } from './auth.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [StoreModule],
  providers: [AuthStoreService]
})
export class AuthStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: AuthStoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'AuthStoreModule');
  }
}