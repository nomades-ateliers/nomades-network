import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@nomades-network/core/environments/environment';
// app
import { AppState } from './app.state';
import * as fromLoading from './loading/loading.reducer';

export const reducers: ActionReducerMap<AppState> = {
  loading: fromLoading.reducer,
  // loaded: fromLoaded.reducer,

}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [/*storeFreeze*/] : [];
export const AppReducers: ActionReducerMap<AppState> = reducers;