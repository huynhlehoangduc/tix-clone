import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TixAuthComponent } from './tix-auth.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [TixAuthComponent, SigninComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TixAuthComponent
  ]
})
export class TixAuthModule { }
