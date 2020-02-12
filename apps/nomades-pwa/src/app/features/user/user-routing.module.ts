import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { CurrentUserPageComponent } from './containers/current-user/current-user.page';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: UserPageComponent
      },
      {
        path: '',
        component: CurrentUserPageComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
