import { ILoadingState } from './loading/loading.reducer';
import { Action } from '@ngrx/store';

export interface AppState {
  loading: ILoadingState | null;
  // error: IErrorState | null;
}
export interface AppRecucerStateI {
  loading: (state: ILoadingState, action: Action) => ILoadingState|null;
  // error: (state: IErrorState, action: Action) => IErrorState|null;
}