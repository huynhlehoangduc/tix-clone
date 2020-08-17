import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tix-carousel',
  templateUrl: './tix-carousel.component.html',
  styleUrls: ['./tix-carousel.component.scss']
})
export class TixCarouselComponent implements OnInit {

  slides = [
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/08/bi-mat-thien-duong-15972163589211.jpg', youtubeLink: ''},
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/08/ca-sau-15972253022491.png', youtubeLink: ''},
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/07/du-lich-chet-choc-15961360123636.jpg', youtubeLink: ''},
  ];

  slideConfig = { dots : true };

  constructor() { }

  ngOnInit(): void {
  }

}
