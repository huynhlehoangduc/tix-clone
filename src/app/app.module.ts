import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your library

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* Top Progress Bar for App*/
    NgProgressModule.withConfig({
      spinnerPosition: 'left',
      color: '#fb4226',
      thick: true,
      spinner: false
    }),
    NgProgressHttpModule,
    BrowserAnimationsModule
    /* End - Top Progress Bar for App*/
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
