import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { throwIfAlreadyLoaded } from '@nomades-network/utils';

import * as fromCurrentUser from './currentUser.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('currentUser', fromCurrentUser.reducer)
  ],
  exports: [StoreModule],
  providers: []
})
export class CurrentUserStoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CurrentUserStoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CurrentUserStoreModule');
  }
}