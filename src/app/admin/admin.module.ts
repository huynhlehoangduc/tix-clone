import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { TixAuthComponent } from '../tix-auth/tix-auth.component';
import { LoginComponent } from '../tix-auth/login/login.component';
import { SigninComponent } from '../tix-auth/signin/signin.component';
import { MovieComponent } from './movie/movie.component';

const route: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: MovieComponent},
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, MovieComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule
  ]
})
export class AdminModule { }
