import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../core/models/Movie';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public maPhim: number;
  public movie: Movie = {
    'maPhim': null,
    'tenPhim': null,
    'biDanh': null,
    'trailer': null,
    'hinhAnh': null,
    'moTa': null,
    'maNhom': null,
    'ngayKhoiChieu': null,
    'danhGia': null
  };
  public subParam: Subscription;
  public isLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    // Lấy id từ url
    this.subParam = this.activatedRoute.params.subscribe((params) => {
      this.maPhim = params.id;

      this.movieService.getMovie(this.maPhim).subscribe({
        next: (reponse) => {
          this.movie = { ...reponse };
          this.isLoaded = true;
          console.log(this.movie);
        },
        error: (error) => {
          this.isLoaded = true;
        },
        complete: () => {
          this.isLoaded = true;
          console.log('Call Api Done');
        },
      });
    });
  }

}
