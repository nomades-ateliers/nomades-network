import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { throwIfAlreadyLoaded } from '@nomades-network/utils';
import { CurrentUserStoreModule } from './currentUser/currentUser-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    CurrentUserStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: true, // Restrict extension to log-only mode
    }),
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
