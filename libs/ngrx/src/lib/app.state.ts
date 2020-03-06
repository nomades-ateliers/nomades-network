import { ILoadingState } from './loading/loading.reducer';
import { Action } from '@ngrx/store';
import { IErrorState } from './errors/error.reducer';

export interface AppState {
  loading: ILoadingState | null;
  error: IErrorState | null;
}
export interface AppRecucerStateI {
  loading: (state: ILoadingState, action: Action) => ILoadingState|null;
  error: (state: IErrorState, action: Action) => IErrorState|null;
}