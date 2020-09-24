import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})


export class MovieComponent implements OnInit {
  dataSource: Movie[] = [];
  displayedColumns = ['maPhim', 'tenPhim', 'moTa', 'ngayKhoiChieu'];
  expandedElement: any | null;

  render = false;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getListMovie().subscribe({
      next: value => {
        this.dataSource = value;
        console.log(value);
      }
    });
  }

  renderTable() {
    this.render = true;
  }
}
