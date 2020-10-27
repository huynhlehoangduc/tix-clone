import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../core/models/Movie';
import { QuanlyrapService } from '../../core/services/quanlyrap.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tao-lich-chieu-dialog',
  templateUrl: './tao-lich-chieu-dialog.component.html',
  styleUrls: ['./tao-lich-chieu-dialog.component.scss']
})
export class TaoLichChieuDialogComponent implements OnInit {
  formM: FormGroup;
  thongTinHeThongRap: any = [];
  cumRaps: any = [];
  raps: any = [];
  thongTinLichChieu = [];
  dataSource = new MatTableDataSource([]);
  displayedColumns = [
    'maLichChieu',
    'heThongRap',
    'cumRap',
    'ngayChieuGioChieu',
    'giaVe',
    'thoiLuong'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public movie: Movie,
              private quanLyRapService: QuanlyrapService,
              public dialogRef: MatDialogRef<TaoLichChieuDialogComponent>,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.formM = new FormGroup({
      heThongRap: new FormControl('', Validators.required),
      cumRap: new FormControl('', Validators.required),
      maRap: new FormControl('', Validators.required),
      ngayChieuGioChieu: new FormControl('', Validators.required),
      giaVe: new FormControl('', [Validators.required, Validators.min(75000), Validators.max(200000)]),
    });
    this.quanLyRapService.layThongTinHeThongRap().subscribe(res => {
      this.thongTinHeThongRap = res;
    });
    this.layThongTinLichChieu();
  }

  layThongTinLichChieu():void {
    this.quanLyRapService.layThongTinLichChieuPhim(this.movie.maPhim.toString()).subscribe(res => {
      // this.thongTinLichChieu
      this.thongTinLichChieu = [];
      res.heThongRapChieu.forEach((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.forEach((cumRapChieu, index) => {
          cumRapChieu.lichChieuPhim.forEach((lichChieuPhim, index) => {
            this.thongTinLichChieu.push({
              maLichChieu: lichChieuPhim.maLichChieu,
              heThongRap: heThongRapChieu.tenHeThongRap,
              cumRap: cumRapChieu.tenCumRap,
              ngayChieuGioChieu: lichChieuPhim.ngayChieuGioChieu,
              giaVe: lichChieuPhim.giaVe,
              thoiLuong: lichChieuPhim.thoiLuong
            });
          });
        });
      });

      this.dataSource = new MatTableDataSource(this.thongTinLichChieu);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onChangeHeThongRap(event): void {
    const { value } = event;
    this.loadCumRap(value);
  }

  onChangeCumRap(event): void {
    const { value } = event;
    this.loadRap(value);
  }

  loadCumRap(maHeThongRap) {
    this.quanLyRapService.layThongTinCumRapTheoHeThong(maHeThongRap).subscribe(res => {
      this.cumRaps = res;
    });
  }

  loadRap(maCumRap): void {
    this.raps = this.cumRaps.find((cumRap) => {
      return cumRap.maCumRap == maCumRap;
    }).danhSachRap;
  }

  onSubmit(): void {
    this.formM.markAllAsTouched();

    if (this.formM.invalid) {
      return;
    }

    const formData = { ...this.formM.value };
    formData.maPhim = this.movie.maPhim;
    formData.ngayChieuGioChieu = formData.ngayChieuGioChieu.toLocaleString('vi-VN', { hour12: false }).split(', ').reverse().join(' ');

    this.quanLyRapService.taoLichChieu(formData).subscribe({
      next: () => {
        this.snackBar.open('Thêm lịch thành công', null, { duration: 6000 });
        this.layThongTinLichChieu();
      },
      error: err => {
        console.log(err);
        this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
          duration: 3000
        });
      }
    });
  }
}
