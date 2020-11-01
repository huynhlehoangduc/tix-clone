import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { QuanlyrapService } from '../../core/services/quanlyrap.service';
import { Rap } from '../../core/models/Rap';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  slideConfig = { dots: true };
  moviesPerSlide = 8;
  slideMovies = [];
  dangChieu = [];
  sapChieu = [];
  isDangChieu = true;
  heThongRaps: Rap[] = [];
  cumRaps = [];
  activeIndexCumRap: number = 0;
  activeIndexRap: number = 0;
  dsPhim = [];


  constructor(private movieService: MovieService, protected quanLyRapServie: QuanlyrapService) {
  }

  ngOnInit(): void {
    let temp = [];
    this.movieService.getListMovie().subscribe({
      next: (listPhim) => {
        for (let i = 0; i < listPhim.length; i += this.moviesPerSlide) {
          temp.push(listPhim.slice(i, i + this.moviesPerSlide));
        }
        ;

        this.sapChieu = [temp.pop()];
        this.dangChieu = temp;
        this.slideMovies = this.dangChieu;
      }
    });

    this.quanLyRapServie.layThongTinHeThongRap().subscribe({
      next: res => {
        this.heThongRaps = res;
        this.layThongTinCumRapTheoHeThong(res[this.activeIndexCumRap], this.activeIndexRap);
      }
    });
  }

  layThongTinCumRapTheoHeThong(heThongRap: Rap, index: number): void {
    this.activeIndexCumRap = index;
    this.activeIndexRap = 0;
    this.quanLyRapServie.layThongTinLichChieuHeThongRap(heThongRap.maHeThongRap).subscribe(res => {
      this.cumRaps = res[0].lstCumRap.filter((item, index0) => {
        let flag = false;
        item.danhSachPhim.forEach((item1, index1) => {
          item1.lstLichChieuTheoPhim.forEach((item2, index2, array) => {
            if (this.compareDateWithNow(item2.ngayChieuGioChieu)) {
              flag = true;
            }
          });
        });
        return flag;
      });

      this.layDanhSachPhim();
    });
  }

  clickRap(rap, index): void {
    this.activeIndexRap = index;
    this.layDanhSachPhim();
  }

  layDanhSachPhim(): void {
    this.dsPhim = this.cumRaps[this.activeIndexRap]?.danhSachPhim.filter(item1 => {
      let flag = false;
      item1.lstLichChieuTheoPhim.forEach(item2 => {
        if (this.compareDateWithNow(item2.ngayChieuGioChieu)) {
          flag = true;
        }
      });
      return flag;
    });
  }

  compareDateWithNow(date): boolean {
    const compareDate = new Date(date);
    const today = new Date();
    return compareDate.toLocaleDateString() === today.toLocaleDateString();
  }

  setDangChieu(): void {
    this.slideMovies = this.dangChieu;
    this.isDangChieu = true;
  }

  setSapChieu(): void {
    this.slideMovies = this.sapChieu;
    this.isDangChieu = true;
  }
}
