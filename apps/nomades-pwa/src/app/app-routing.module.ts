import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: []
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }