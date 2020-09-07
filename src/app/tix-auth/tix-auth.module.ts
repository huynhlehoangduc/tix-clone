import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TixAuthComponent} from './tix-auth.component';
import {SigninComponent} from './signin/signin.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '', component: TixAuthComponent, children: [
      { path: '', redirectTo: 'login' },
      {path: 'login', component: LoginComponent},
      {path: 'signin', component: SigninComponent},
    ]
  },
];

@NgModule({
  declarations: [TixAuthComponent, SigninComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [
    TixAuthComponent
  ]
})
export class TixAuthModule {
}
