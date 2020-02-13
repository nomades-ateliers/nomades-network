import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// libs
import { AuthStoreService } from '@nomades-network/ngrx/lib/auth/auth-store.service';
// features
import { AuthPageBaseComponent } from '@nomades-network/features/auth/containers/auth-page/auth-page.component';

@Component({
  selector: 'nomades-network-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthPageComponent extends AuthPageBaseComponent implements OnInit {
  
  constructor( _store: AuthStoreService) {
    super(_store);
    this.loginBtn = true;
  }
  
}