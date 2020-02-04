import { Component, OnInit } from '@angular/core';

// libs
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { IUser } from '@nomades-network/api-interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'nomades-network-auth-page',
  template: `
    <div>
      <h1>hello main page </h1>
      <pre>
        {{ currentUser$ | async | json }}
      </pre>
    <div>
    
  `,
  styles: [``]
})
export class MainPageComponent  implements OnInit {
  
  currentUser$: Observable<IUser>;

  constructor( 
    private _store: CurrentUserStoreService
  ) {
  }
  
  ngOnInit() {
    console.log('hello main page');
    this.currentUser$ = this._store.getCurrentUser();
  }
}