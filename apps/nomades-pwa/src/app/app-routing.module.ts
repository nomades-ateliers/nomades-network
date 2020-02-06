import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AuthGuard } from '@nomades-network/core/guards/auth/auth.guard';
import { NoAuthGuard } from '@nomades-network/core/guards/no-auth/no-auth.guard';

const ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: [NoAuthGuard]
  },
  // {
  //   path: '', redirectTo: 'auth', pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }