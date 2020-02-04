import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// libs
import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
// app
import { MainPageComponent } from './containers/main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
