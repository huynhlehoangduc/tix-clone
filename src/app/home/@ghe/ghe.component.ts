import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ghe } from '../../core/models/Ghe';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  @Input() ghe: Ghe;
  @Input() index: number;
  @Input() lastHangGhe: boolean;
  @Output() chonGhe = new EventEmitter();

  dangChon: boolean = false;
  taiKhoan: string = '';
  title = '';

  constructor() {
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.taiKhoan = currentUser.taiKhoan;

    if (this.ghe.daDat) {
      if (this.ghe.taiKhoanNguoiDat != this.taiKhoan) {
        this.title = 'Ghế đã có người đặt';
      } else {
        this.title = 'Bạn đã đặt ghế này';
      }
    }
  }

  datGhe(ghe): void {
    if (ghe.daDat) {
      return;
    }
    this.dangChon = !this.dangChon;
    this.chonGhe.emit(this.dangChon);
  }

}
