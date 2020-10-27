import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-youtube-dialog',
  templateUrl: './youtube-dialog.component.html',
  styleUrls: ['./youtube-dialog.component.scss']
})
export class YoutubeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public link: string) { }

  ngOnInit(): void {
  }

}
