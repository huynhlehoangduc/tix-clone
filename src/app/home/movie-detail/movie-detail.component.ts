import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/Movie';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../core/services/movie.service';
import { QuanlyrapService } from '../../core/services/quanlyrap.service';
import { Rap } from '../../core/models/Rap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public maPhim: number;
  public movie: Movie | null = null;
  public subParam: Subscription;
  public isLoaded = false;
  public danhSachRap: Rap[];
  public heThongRapChieu: any[];
  public activeCumRapIndex = 0;
  public activeCumRapChieu = [];
  public danhSachNgay = [];
  public activeDate = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private quanlyrapService: QuanlyrapService
  ) {
  }

  ngOnInit(): void {
    // Lấy id từ url
    this.subParam = this.activatedRoute.params.subscribe((params) => {
      this.maPhim = params.id;

      this.movieService.getMovie(this.maPhim).subscribe({
        next: (movie) => {
          this.movie = { ...movie };
          console.log(movie);
          this.isLoaded = true;

          this.quanlyrapService.layThongTinHeThongRap().subscribe(danhSachRap => {
            this.danhSachRap = danhSachRap;
            this.quanlyrapService.layThongTinLichChieuPhim(movie.maPhim).subscribe(lichChieu => {
              this.heThongRapChieu = lichChieu.heThongRapChieu;
              this.setActiveCumRapChieu(this.activeCumRapIndex);
            });
          });
        },
        error: (error) => {
          this.isLoaded = true;
        },
        complete: () => {
          this.isLoaded = true;
        },
      });
    });
    this.initDanhSachNgay();
  }

  initDanhSachNgay(): void {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    for (let i = 0; i < 14; i++) {
      date.setDate(date.getDate() + 1);
      this.danhSachNgay.push(new Date(date));
    }
  }

  clickCumRam(index): void {
    this.activeCumRapIndex = index;
    this.setActiveCumRapChieu(index);
  }

  setActiveCumRapChieu(index): void {
    this.heThongRapChieu.forEach(item => {
      if (item.maHeThongRap === this.danhSachRap[index].maHeThongRap) {
        item.cumRapChieu.forEach((cumRap, indexcumRap) => {
          cumRap.lichChieuPhim.forEach((lichChieu, indexlichChieu) => {
            item.cumRapChieu[indexcumRap].lichChieuPhim[indexlichChieu].ngayChieuGioChieu = new Date(lichChieu.ngayChieuGioChieu);
          });
        });
        this.activeCumRapChieu = item;
      }
    });
  }

  scrollTo(destination) {
  }
}
