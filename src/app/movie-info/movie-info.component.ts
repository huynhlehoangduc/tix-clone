import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  slideConfig = {dots: true};
  moviesPerSlide = 8;
  slideMovies = [];

  constructor() {
    let tempArray = [];
    for (let i = 0; i < 12; i++) {
      tempArray.push({
        name: 'Kẻ Cắp Nhân Dạng - Simon\'s Got a Gift',
        imgPath: 'https://s3img.vcdn.vn/mobile/123phim/2020/08/ke-cap-nhan-dang-simon-s-got-a-gift-p-15976628852831_215x318.png',
        duration: '103 phút',
        isPlaySoon: 'true',
      });
    }

    for (let i = 0; i < tempArray.length; i += this.moviesPerSlide) {
      this.slideMovies.push(tempArray.slice(i, i + this.moviesPerSlide));
    }
  }

  ngOnInit(): void {
    console.log(this.slideMovies);
  }
}
