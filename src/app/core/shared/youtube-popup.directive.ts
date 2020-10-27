import { Component, Directive, HostListener, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appYoutubePopup]'
})
export class YoutubePopupDirective {
  @Input() link: string;

  constructor(public dialog: MatDialog) {
  }

  @HostListener('click') click(): void {
    const dialogRef = this.dialog.open(YoutubePopupDialog, {
      panelClass: 'myapp-no-padding-dialog',
      data: this.link
    });
  }
}

class DialogData {
}

@Component({
  selector: 'app-youtube-popup-dialog',
  template: `
    <span (click)="closeDialog()" class="yt-close"><img src="https://tix.vn/app/assets/img/icons/close.png" ng-click="closeTrailer()"></span>
    <iframe width="100%"
            height="100%"
            [src]="data"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"

            allowfullscreen></iframe>`,
  styles: [''],
})
export class YoutubePopupDialog {

  constructor(
    public dialogRef: MatDialogRef<YoutubePopupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private sanitizer: DomSanitizer) {
    this.data = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.toString() + '?autoplay=1');
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
