import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NavParams } from '@ionic/angular';
// libs
import { IUser } from '@nomades-network/api-interfaces';
import { UserService } from '@nomades-network/core/services';
import { ActivatedRoute } from '@angular/router';
import { getSectionsEditable } from '../../utils';

@Component({
  selector: 'nomades-network-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit {

  // Observable data
  public user$: Observable<IUser>;
  public sectionsEditable = getSectionsEditable();
  
  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute
  ) { }

  async ngOnInit() {
    console.log('init user by id');
    
    await this.loadUserData();
  }

  async loadUserData() {
    const { id = null } = this._route.snapshot.params;
    this.user$ = this._userService.getUserById(id).pipe();
  }

}
