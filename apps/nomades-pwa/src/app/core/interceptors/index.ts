import { HTTP_INTERCEPTORS } from '@angular/common/http';
// libs
import { TokenInterceptor } from '@nomades-network/core/interceptors/token.interceptor';
// app
import { ErrorInterceptor } from './error.interceptor';
import { LoaderInterceptor } from './loader.interceptor';

export const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
]