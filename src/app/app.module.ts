import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TixCarouselComponent } from './tix-carousel/tix-carousel.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { NewsComponent } from './news/news.component';
import { MobileAdsComponent } from './mobile-ads/mobile-ads.component';
import { FooterComponent } from './footer/footer.component';

// Module
import {TixAuthModule} from './tix-auth/tix-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TixCarouselComponent,
    MovieInfoComponent,
    NewsComponent,
    MobileAdsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    TixAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
