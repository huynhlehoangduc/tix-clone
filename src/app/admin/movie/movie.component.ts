import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { Movie } from '../../core/models/Movie';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CreateMovieDialogComponent } from '../create-movie-dialog/create-movie-dialog.component';
import { ConfirmDialogComponent } from '../../core/shared/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaoLichChieuDialogComponent } from '../tao-lich-chieu-dialog/tao-lich-chieu-dialog.component';

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

  constructor(private movieService: MovieService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getListMovie();
  }

  getListMovie() {
    this.movieService.getListMovie().subscribe({
      next: value => {
        this.dataSource = new MatTableDataSource(value);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  createMovie(): void {
    const dialogRef = this.dialog.open(CreateMovieDialogComponent, {
      width: '650px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(added => {
      if (added) {
        this.getListMovie();
      }
    });

    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }

  updateMovie(movie: Movie): void {
    const dialogRef = this.dialog.open(CreateMovieDialogComponent, {
      width: '650px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(added => {
      if (added) {
        this.getListMovie();
      }
    });
  }

  deleteMovie(id): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: 'Bạn có muốn xóa',
    });
    dialogRef.afterClosed().subscribe(accept => {
      console.log('Delete movie:', id);
      if (accept) {
        this.movieService.deleteMovie(id).subscribe({
          next: value => {
            console.log(value);
            this.snackBar.open('Xóa thành công', '', {
              duration: 3000
            });
            this.getListMovie();
          },
          error: err => {
            console.log(err);
            this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
              duration: 3000
            });
          }
        });
      }
    });
  }

  taoLichChieU(movie: Movie) {
    const dialogRef = this.dialog.open(TaoLichChieuDialogComponent, {
      width: '650px',
      data: movie
    });

    dialogRef.afterClosed().subscribe(added => {
    });
  }
}
