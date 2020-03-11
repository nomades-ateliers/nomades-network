import { ActionReducerMap, MetaReducer, Action, ActionReducer } from '@ngrx/store';
import { environment } from '@nomades-network/core/environments/environment';
// app
import { AppState } from './app.state';
import * as fromLoading from './loading/loading.reducer';
import * as fromError from './errors/error.reducer';

export function clearState(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: Action): AppState {
    if (action.type.toLowerCase().includes('logout')) {
      state = undefined;
    }    
    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<AppState> = {
  loading: fromLoading.reducer,
  error: fromError.reducer,
  // loaded: fromLoaded.reducer,
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [clearState] : [clearState];
export const AppReducers: ActionReducerMap<AppState> = reducers;