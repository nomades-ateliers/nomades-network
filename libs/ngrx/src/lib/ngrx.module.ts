import { NgModule, Optional, SkipSelf } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// libs
import { throwIfAlreadyLoaded } from '@nomades-network/utils';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// app
import { EffectsModule } from '@ngrx/effects';
import { AppReducers, metaReducers } from './app.reducer';
import { ErrorsEffects } from './errors/error.effect';

@NgModule({
  imports: [
    StoreModule.forRoot(AppReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: true, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([
      ErrorsEffects
    ])
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
