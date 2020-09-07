import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MobileAdsComponent} from './mobile-ads/mobile-ads.component';
import {MovieInfoComponent} from './movie-info/movie-info.component';
import {NewsComponent} from './news/news.component';
import {TixCarouselComponent} from './tix-carousel/tix-carousel.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: []
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
    TixCarouselComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent]
})
export class HomeModule {
}
