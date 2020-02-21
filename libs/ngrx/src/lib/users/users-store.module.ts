import { Optional, SkipSelf, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// libs
import { throwIfAlreadyLoaded } from '@nomades-network/utils';
// app
import * as fromUsers from './user-store.reducer';
import { UsersStoreService } from './users-store.service';
import { UsersStoreEffects } from './users-store.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('users', fromUsers.reducer),
    EffectsModule.forFeature([UsersStoreEffects])
  ],
  exports: [StoreModule],
  providers: [UsersStoreService]
})
export class UsersStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: UsersStoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'UsersStoreModule');
  }
}