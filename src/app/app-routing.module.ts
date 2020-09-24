import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { TixAuthComponent } from './tix-auth/tix-auth.component';
// import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    // component: TixAuthComponent
    loadChildren: () =>
      import('./tix-auth/tix-auth.module').then((m) => m.TixAuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
