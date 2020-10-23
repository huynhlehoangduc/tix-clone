import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanlyrapService } from '../../core/services/quanlyrap.service';
import { ThongTinLichChieu } from '../../core/models/ThongTinLichChieu';
import { Ghe } from '../../core/models/Ghe';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {
  maLichChieu: string;
  danhSachGhe: Ghe[];
  thongTinPhim: ThongTinLichChieu;
  tongTien: number = 0;

  gheDangChon: Ghe[] = [];
  gheDangChonString: string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private quanLyRap: QuanlyrapService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.maLichChieu = params.ma_lich_chieu;
      this.quanLyRap.layDanhSachPhongVe(this.maLichChieu).subscribe(res => {
        this.thongTinPhim = res.thongTinPhim;
        this.danhSachGhe = res.danhSachGhe;
        console.log(this.thongTinPhim);
      });
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

    this.tinhTongTien();
  }


  tinhTongTien(): void {
    this.tongTien = this.gheDangChon.reduce((tongTien: number, ghe: Ghe) => {
      return tongTien += ghe.giaVe;
    }, 0);
  }

}
