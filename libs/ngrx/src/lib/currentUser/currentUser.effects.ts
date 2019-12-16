import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ICurrentUserState } from './currentUser.reducer';

@Injectable()
export class CurrentUserEffects {
  constructor(
    private _action$: Actions,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<{
      currentUser: ICurrentUserState;
    }>
  ) {}
  
  }