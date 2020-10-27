import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { YoutubeDialogComponent } from './youtube-dialog/youtube-dialog.component';
import { YoutubePopupDirective } from './youtube-popup.directive';


@NgModule({
  declarations: [ConfirmDialogComponent, YoutubeDialogComponent, YoutubePopupDirective],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [ConfirmDialogComponent, YoutubePopupDirective]
})
export class SharedModule {
}
