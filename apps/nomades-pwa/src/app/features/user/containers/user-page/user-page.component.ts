import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// libs
import { IAuth, IUser } from '@nomades-network/api-interfaces';
// app
import { UserService } from '../../services/user/user.service';
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'nomades-network-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit {

  public authForm: FormGroup;
  public userDataForm: FormGroup;
  public appearanceForm: FormGroup;
  public configForm: FormGroup;
  public user$: Observable<Partial<IUser & IAuth & {tz?: string}>>;
  public readonly tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public sectionsEditable = [
    {
      key: 'desc',
      value: false,
      title: 'Description'
    },
    {
      key: 'job',
      value: false,
      title: 'Métier | Profession:'
    },
    {
      key: 'skills',
      value: false,
      title: 'Compétences:'
    },
    {
      key: 'contact',
      value: false,
      title: 'Contact:'
    },
    {
      key: 'trainings',
      value: false,
      title: 'Formation (Nomades):'
    }
  ];

  constructor(
    private _userStoreService: CurrentUserStoreService
  ) { }

  async ngOnInit() {
    this.authForm = new FormGroup({
      _id: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      email: new FormControl({value: '', disabled: true}, Validators.compose([
        // Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        // Validators.required,
      ])),
      // password: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.pattern(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^\w\s]).{6,}/)
      // ])),
    });
    // user data
    this.userDataForm = new FormGroup({
      // default
      _id: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      // optional
      firstname: new FormControl('', Validators.compose([])),
      lastname: new FormControl('', Validators.compose([])),
      address: new FormGroup({
        street: new FormControl(null),
        street2: new FormControl(null),
        street_number: new FormControl(null),
        zipCode: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        country: new FormControl(null),
        countryCode: new FormControl(null),
        default: new FormControl(null), 
      }),
    });
    await this.loadUserData();
  }

  async loadUserData() {
    // const user = await this._userService.getCurrentUser();
    this.user$ = this._userStoreService.getCurrentUser().pipe(
      tap(user => {
        if (!user || !user._id)
          return;
        this.authForm.patchValue(user);
        this.userDataForm.patchValue(user);
      })
    );

    
  }

  async changeData($event: CustomEvent, type: string) {
    $event.preventDefault();
    console.log('---');
    switch (true) {
      case type === 'pwd':     
        break;
      case type === 'tz':     
        break;
      case type === 'langue':
        break;
      default:
        break;
    }
    alert('not implemented')
  }

  modify(controlName: string) {
    this.sectionsEditable[controlName] = !this.sectionsEditable[controlName];
  }

  async save(userData: Partial<IUser>){
    if (!userData) {
      console.log('err:', userData);
      return;
    } 
    console.log('to save-> ', {...userData});
    // const { user = null} = await this._userService.updateUser({...userData, _id: this.user._id}).catch(err => err);
    // if (!user) return;
    // this.user = {...this.user, ...user};
    // // patch all value
    // this.authForm.markAsPristine();
    // this.authForm.patchValue(user, { emitEvent: false });
    // this.userDataForm.markAsPristine();
    // this.userDataForm.patchValue(user, { emitEvent: false });
  }

}
