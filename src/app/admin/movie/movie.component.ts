import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/Movie';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})


export class MovieComponent implements OnInit {
  dataSource: MatTableDataSource<Movie>;
  displayedColumns = ['maPhim', 'tenPhim', 'moTa', 'ngayKhoiChieu', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getListMovie().subscribe({
      next: value => {
        this.dataSource = new MatTableDataSource(value);
        ;
        console.log(value);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
