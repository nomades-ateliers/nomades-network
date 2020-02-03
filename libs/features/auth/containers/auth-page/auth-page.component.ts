import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { IUser } from '@nomades-network/api-interfaces';
import { AuthStoreService } from '@nomades-network/ngrx/lib/auth/auth-store.service'; ///ngrx/src/lib/auth/auth-store.service';

export abstract class AuthPageBaseComponent implements OnInit {
  
  public user: IUser | null;
  public authForm: FormGroup;
  public loginBtn = true;
  
  constructor(
    protected readonly _store: AuthStoreService
  ) {

  }
  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(
        'demo@demo.ch',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ),
      password: new FormControl(
        'A123456',
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }


  send(actionName: string = 'login'): void {
    if (!this.authForm.valid) {
      // TODO display error
      console.log('form not valid', this.authForm.valid);
      return;
    }
    switch (true) {
      case actionName === 'login' :
        this._store.dispatchLoginAction(this.authForm.value);
        break;
      case actionName === 'create':
        this._store.dispatchCreateAction(this.authForm.value);
        break;
      default:
        break;
    }
  }
}
