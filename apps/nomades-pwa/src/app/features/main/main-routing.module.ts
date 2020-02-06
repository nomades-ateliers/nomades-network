import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// libs
import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
// app
import { MainPageComponent } from './containers/main-page/main-page.component';
import { MainDefaultPageComponent } from './containers/main-default-page/main-default-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        component: MainDefaultPageComponent
      }
    ]
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
