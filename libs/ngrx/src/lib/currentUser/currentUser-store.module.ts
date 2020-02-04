import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { throwIfAlreadyLoaded } from '@nomades-network/utils';

import * as fromCurrentUser from './currentUser.reducer';
import { CurrentUserStoreService } from './currentUser-store.service';

@NgModule({
  imports: [
    StoreModule.forFeature('currentUser', fromCurrentUser.reducer)
  ],
  exports: [StoreModule],
  providers: [CurrentUserStoreService]
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