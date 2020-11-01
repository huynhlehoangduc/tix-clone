import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tix-carousel',
  templateUrl: './tix-carousel.component.html',
  styleUrls: ['./tix-carousel.component.scss']
})
export class TixCarouselComponent implements OnInit {

  slides = [
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/10/cuc-no-hoa-cuc-cung-pawn-p-16021265927768.png', youtubeLink: 'https://www.youtube.com/embed/mukpuMI4eSw'},
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/10/tiec-trang-mau-blood-moon-party-16021267739246.png', youtubeLink: 'https://www.youtube.com/embed/Vgb1uUmpQNU'},
    {imgPath: 'https://s3img.vcdn.vn/123phim/2020/09/rom-c18-16008300686919.png', youtubeLink: 'https://www.youtube.com/embed/XRm1P7oGpMQ'},
  ];

  slideConfig = { dots : true };

  constructor() { }

  ngOnInit(): void {
  }

}
