import { OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { IUser } from '@nomades-network/api-interfaces';
import { AuthStoreService } from '@nomades-network/ngrx/lib/auth/auth-store.service'; ///ngrx/src/lib/auth/auth-store.service';

export abstract class AuthPageBaseComponent implements OnInit {
  
  public user: IUser | null;
  public userForm: FormGroup;
  public loginBtn = true;
  
  constructor(
    protected readonly _store: AuthStoreService
  ) {

  }
  ngOnInit() {
    this.userForm = new FormGroup({
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


  send(): void {
    if (!this.userForm.valid) {
      // TODO display error
      console.log('form not valid', this.userForm.valid);
      return;
    }
    switch (this.loginBtn) {
      case true:
        this._store.dispatchLoginAction(this.userForm.value);
        break;
      case false:
        this._store.dispatchCreateAction(this.userForm.value);
        break;
      default:
        break;
    }
  }
}
