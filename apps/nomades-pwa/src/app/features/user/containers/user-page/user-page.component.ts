import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
// libs
import { IAuth, IUser } from '@nomades-network/api-interfaces';
import { UserService } from '@nomades-network/core/services';
import { CurrentUserStoreService } from '@nomades-network/ngrx/lib/currentUser/currentUser-store.service';
import { getSectionsEditable } from '../../utils';


@Component({
  selector: 'nomades-network-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit {

  // form builders
  public authForm: FormGroup;
  public userDataForm: FormGroup;
  public appearanceForm: FormGroup;
  public configForm: FormGroup;
  public trainingForm: FormGroup;
  public skillForm: FormGroup;
  // Observable data
  public user$: Observable<Partial<IUser & IAuth & {tz?: string}>>;
  public trainings$: Observable<{_id?: string; name?: string}[]>;
  // Getm dynamic form section with data & action builder
  public sectionsEditable = getSectionsEditable({
    // injected action for trainings edit btn click 
    trainings: (indexSection: string) => {
      this.toogleEditState(+indexSection);
      // this.sectionsEditable[indexSection].value = !this.sectionsEditable[indexSection].value;
      if (this.trainings$) return;
      // request to load trainings list
      this.trainings$ = this._userService.getTtrainingsList().pipe(
        tap(res => console.log(res))
      );
    },
    // injected action for skills edit btn click 
    skills: (indexSection: string) => {
      // TODO: load existing skills as list
      this.toogleEditState(+indexSection);
      // this.sectionsEditable[indexSection].value = !this.sectionsEditable[indexSection].value;
    }
  });

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
    this.skillForm = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      level: new FormControl(''),
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
      skills: new FormArray([]),
      trainings: new FormArray([]),

    });
    await this.loadUserData();
  }

  async loadUserData() {
    // const user = await this._userService.getCurrentUser();
    this.user$ = this._userStoreService.getCurrentUser().pipe(
      // patch authForm
      tap(user => {
        if (!user || !user._id)
          return;
        this.authForm.patchValue(user);
      }),
      // patch userDataForm
      tap(user => {
        if (!user || !user._id)
          return;
        this.userDataForm.patchValue(user);
      }),
      // patch trainings for userDataForm
      tap(user => {
        if (!user || !user._id)
          return;
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
      }),
      // patch skills for userDataForm
      tap(user => {
        if (!user || !user._id)
          return;
        // reset control
        if (user.skills) this.userDataForm.get('skills')['controls'] = [];
        // add existing skills
        if (user.skills) user.skills.map(t => {
          const group = new FormGroup({
            name: new FormControl(t.name, Validators.compose([Validators.required])),
            value: new FormControl(t.level, Validators.compose([]))
          });
          // patch value
          (this.userDataForm.get('skills') as FormArray).push(group)
        })
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

  addSkill() {
    console.log('addSkill...', this.skillForm.value);
    const group = new FormGroup({
      name: new FormControl(this.skillForm.value.name, Validators.compose([Validators.required])),
      level: new FormControl(this.trainingForm.value.level, Validators.compose([])),
    });
    (this.userDataForm.get('skills') as FormArray).push(group);
    this.skillForm.reset();
    this.sectionsEditable.find(s => s.key === 'skills').value = false;
    this.save(this.userDataForm.value);
  }
  
  toogleEditState(sectionIndex: number) {
    this.sectionsEditable = this.sectionsEditable.map((section, index) => {
      section.value = false;
      if ((index === sectionIndex) && !section.value)
        section.value = true
      return section;
    })
  }

  async save(userData: Partial<IUser>){
    if (!userData) {
      console.log('err:', userData);
      return;
    } 
    console.log('to save-> ', {...userData});
    this._userStoreService.dispatchUpdateAction({...userData, _id: this.userDataForm.value._id})
    this.userDataForm.markAsPristine();
    this.userDataForm.patchValue(userData, { emitEvent: false });
  }

}
