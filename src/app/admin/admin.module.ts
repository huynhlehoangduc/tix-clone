import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { TixAuthComponent } from '../tix-auth/tix-auth.component';
import { LoginComponent } from '../tix-auth/login/login.component';
import { SigninComponent } from '../tix-auth/signin/signin.component';
import { MovieComponent } from './movie/movie.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

const route: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: MovieComponent},
      {path: '/movie', component: MovieComponent},
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, MovieComponent, AdminNavComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule
  ]
})
export class AdminModule { }
