import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './@header/header.component';
import { FooterComponent } from './@footer/footer.component';
import { NewsComponent } from './@news/news.component';
import { TixCarouselComponent } from './@tix-carousel/tix-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MobileAdsComponent } from './@mobile-ads/mobile-ads.component';
import { MovieInfoComponent } from './@movie-info/movie-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoadingComponent } from '../core/components/loading/loading.component';
import { DatVeComponent } from './dat-ve/dat-ve.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'movie-detail/:id', component: MovieDetailComponent },
      { path: 'dat-ve/:ma_lich_chieu', component: DatVeComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MobileAdsComponent,
    MovieInfoComponent,
    NewsComponent,
    TixCarouselComponent,
    HomePageComponent,
    MovieDetailComponent,
    LoadingComponent,
    DatVeComponent,
  ],
  imports: [
    SlickCarouselModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [HomeComponent],
})
export class HomeModule {
}
