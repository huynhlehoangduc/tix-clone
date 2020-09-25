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
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PipesModule } from '../core/pipes/pipes.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { UserComponent } from './user/user.component';


const route: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: 'movie',},
      {path: 'movie', component: MovieComponent},
      {path: 'lich-chieu', component: LichChieuComponent},
      {path: 'nguoi-dung', component: UserComponent},
    ]
  }
];

@NgModule({
  declarations: [AdminComponent, MovieComponent, LichChieuComponent, UserComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTableModule,
    MatButtonToggleModule,
    PipesModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
