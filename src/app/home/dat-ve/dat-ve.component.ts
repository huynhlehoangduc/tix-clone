import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanlyrapService } from '../../core/services/quanlyrap.service';
import { ThongTinLichChieu } from '../../core/models/ThongTinLichChieu';
import { Ghe } from '../../core/models/Ghe';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit, OnDestroy {
  maLichChieu: string;
  danhSachGhe: any = [];
  thongTinPhim: ThongTinLichChieu;
  tongTien: number = 0;
  isLoading = true;

  gheDangChon: Ghe[] = [];
  gheDangChonString: string = '';

  interval = null;

  disableDatVe: boolean = true;
  time = 4 * 60 * 1000; // 5 mins in mili seconds
  stringTime = '5:00';

  constructor(private activatedRoute: ActivatedRoute,
              private quanLyRap: QuanlyrapService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.maLichChieu = params.ma_lich_chieu;
      this.getGhe();
    });
    const self = this;
    this.interval = setInterval(function() {
      self.time -= 1000;
      console.log(self.time);
      self.stringTime = Math.round((self.time / 1000 / 60)).toString().padStart(2, '0')
        + ':' + (self.time / 1000 % 60).toString().padStart(2, '0');
      if (self.time === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getGhe(): void {
    this.isLoading = true;
    this.quanLyRap.layDanhSachPhongVe(this.maLichChieu).subscribe(res => {
      this.isLoading = false;
      this.thongTinPhim = res.thongTinPhim;
      this.danhSachGhe = [];
      res.danhSachGhe.sort((a: Ghe, b: Ghe) => {
        if (a.loaiGhe < b.loaiGhe) {
          return -1;
        }
        if (a.loaiGhe > b.loaiGhe) {
          return 1;
        }
        return 0;
      });
      for (let i = 0; i < res.danhSachGhe.length; i += 14) {
        this.danhSachGhe.push(res.danhSachGhe.slice(i, i + 14));
      }
    });
  }

  chonGhe(dangChon: boolean, ghe: Ghe): void {
    if (dangChon) {
      this.gheDangChon.push(ghe);
    } else {
      this.gheDangChon = this.gheDangChon.filter(tempGhe => {
        return tempGhe.maGhe !== ghe.maGhe;
      });
    }

    this.gheDangChonString = this.gheDangChon.map(ghe => ghe.tenGhe).join(', ');
    this.disableDatVe = !this.gheDangChon.length;
    this.tinhTongTien();
  }


  tinhTongTien(): void {
    this.tongTien = this.gheDangChon.reduce((tongTien: number, ghe: Ghe) => {
      return tongTien += ghe.giaVe;
    }, 0);
  }

  datVe(): void {
    const confirmDatve = confirm('Xác nhận đặt vé');
    if (!confirmDatve) {
      return;
    }

    let params = {
      maLichChieu: this.maLichChieu,
      danhSachVe: this.gheDangChon,
      taiKhoanNguoiDung: null
    };

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    params.taiKhoanNguoiDung = currentUser.taiKhoan;

    this.quanLyRap.datVe(params).subscribe({
      next: value => {
        this.snackBar.open('Đặt vé thành công', '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.getGhe();
        this.gheDangChon = [];
        this.gheDangChonString = '';
        this.tongTien = 0;
      },
      error: err => {
        this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    });
  }
}
