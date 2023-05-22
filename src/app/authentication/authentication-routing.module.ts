import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [{
  path: '',
  component: AuthenticationComponent,
  children: [
    {
      path: 'create-account',
      loadChildren: () => import('./create-account/create-account.module').then(m => m.CreateAccountModule)
    },
    {
      path: '**', 
      redirectTo: 'create-account'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
