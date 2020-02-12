import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
// libs
import { IAuth, IUser } from '@nomades-network/api-interfaces';
import { UserService } from '@nomades-network/core/services';
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';


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
  public trainingForm: FormGroup;
  public user$: Observable<Partial<IUser & IAuth & {tz?: string}>>;
  public trainings$: Observable<{_id?: string; name?: string}[]>;
  public readonly tz: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  public sectionsEditable = [
    {
      key: 'desc',
      value: false,
      title: 'Description',
      isString: true
    },
    {
      key: 'job',
      value: false,
      title: 'Métier | Profession:',
      isString: true
    },
    {
      key: 'skills',
      value: false,
      title: 'Compétences:',
      isArray: true
    },
    {
      key: 'contact',
      value: false,
      title: 'Contact:'
    },
    {
      key: 'trainings',
      value: false,
      title: 'Formation (Nomades):',
      isArray: true,
      action: (index) => {
        this.sectionsEditable[index].value = !this.sectionsEditable[index].value;
        // if (this.sectionsEditable[index].value) this.addTraining();
        if (this.trainings$) return;
        console.log('load...');
        this.trainings$ = this._userService.getTtrainingsList().pipe(
          tap(res => console.log(res))
        )
      }
    }
  ];

  constructor(
    private _userStoreService: CurrentUserStoreService,
    private _userService: UserService,
    private _modalCtrl: ModalController
  ) { }

  async ngOnInit() {
    this.trainingForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      cerfifiedState: new FormControl('', Validators.compose([Validators.required])),
      certifiedProject: new FormControl('', Validators.compose([Validators.required])),
      certifiedProjectUrl: new FormControl('', Validators.compose([]))
    });
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
      _id: new FormControl(''),
      // optional
      firstname: new FormControl('', Validators.compose([])),
      lastname: new FormControl('', Validators.compose([])),
      contact: new FormGroup({
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
      desc: new FormControl('', Validators.compose([])),
      job: new FormControl('', Validators.compose([])),
      skills: new FormArray([
        // new FormGroup({
        //   name: new FormControl('', Validators.compose([])),
        // })
      ]),
      trainings: new FormArray([]),

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
        // set trainings value
        // reset control
        if (user.trainings) this.userDataForm.get('trainings')['controls'] = [];
        // add existing training
        if (user.trainings) user.trainings.map(t => {
          const group = new FormGroup({
            name: new FormControl(t.name, Validators.compose([Validators.required])),
            cerfifiedState: new FormControl(t.cerfifiedState, Validators.compose([Validators.required])),
            certifiedProject: new FormControl(t.certifiedProject, Validators.compose([Validators.required])),
            certifiedProjectUrl: new FormControl(t.certifiedProjectUrl, Validators.compose([]))
          });
          // patch value
          (this.userDataForm.get('trainings') as FormArray).push(group)
        })
        console.log('from value: ', this.userDataForm.value);
        
      })
    );
  }

  addTraining() {
    const group = new FormGroup({
      name: new FormControl(this.trainingForm.value.name, Validators.compose([Validators.required])),
      cerfifiedState: new FormControl(this.trainingForm.value.cerfifiedState, Validators.compose([Validators.required])),
      certifiedProject: new FormControl(this.trainingForm.value.certifiedProject, Validators.compose([Validators.required])),
      certifiedProjectUrl: new FormControl(this.trainingForm.value.certifiedProjectUrl, Validators.compose([]))
    });
    (this.userDataForm.get('trainings') as FormArray).push(group);
    this.trainingForm.reset();
    this.sectionsEditable.find(s => s.key === 'trainings').value = false;
    this.save(this.userDataForm.value);
  }

  // async editTrainings () {
  //   // get user data from store
  //   const user = await this.user$.pipe(first()).toPromise().catch(err => err);
  //   // create modal and pass component & componentProps
  //   const ionModal = await this._modalCtrl.create({
  //     component: TrainingFormComponent,
  //     componentProps: {user}
  //   });
  //   // display modal
  //   await ionModal.present();
  //   // wait on close to handle updated data
  //   const {data = null, ...error} = await ionModal.onDidDismiss().then(res => res).catch(err => err);
  //   // send value to backend with store action
  //   console.log('dataUpdated from modal: ', data, error);
  // }

  modify(controlName: string) {
    this.sectionsEditable[controlName] = !this.sectionsEditable[controlName];
  }

  async save(userData: Partial<IUser>){
    if (!userData) {
      console.log('err:', userData);
      return;
    } 
    console.log('to save-> ', {...userData});
    this._userStoreService.dispatchUpdateAction({...userData, _id: this.userDataForm.value._id})
    // this.authForm.markAsPristine();
    // this.authForm.patchValue(userData, { emitEvent: false });
    this.userDataForm.markAsPristine();
    this.userDataForm.patchValue(userData, { emitEvent: false });
  }

}
