import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TixCarouselComponent } from './tix-carousel/tix-carousel.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TixCarouselComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
