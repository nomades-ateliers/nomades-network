import { HTTP_INTERCEPTORS } from '@angular/common/http';
// libs
import { TokenInterceptor } from '@nomades-network/core/interceptors/token.interceptor';

export const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
]