import { Optional, SkipSelf, NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { throwIfAlreadyLoaded } from '@nomades-network/utils';

@NgModule({
  imports: [
    StoreModule.forFeature('currentUser', {})
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