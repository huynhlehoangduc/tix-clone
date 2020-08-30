import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TixAuthComponent } from './tix-auth.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [TixAuthComponent, SigninComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TixAuthComponent
  ]
})
export class TixAuthModule { }
