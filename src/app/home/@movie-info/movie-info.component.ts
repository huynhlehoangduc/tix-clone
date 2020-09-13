import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  slideConfig = { dots: true };
  moviesPerSlide = 8;
  slideMovies = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    console.log(this.slideMovies);
    this.movieService.getListMovie().subscribe({
      next: (listPhim) => {
        console.log(listPhim);

        for (let i = 0; i < listPhim.length; i += this.moviesPerSlide) {
          this.slideMovies.push(listPhim.slice(i, i + this.moviesPerSlide));
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
      },
    });
  }
}
