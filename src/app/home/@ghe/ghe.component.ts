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

  constructor() {
  }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.taiKhoan = currentUser.taiKhoan;
  }

  datGhe(ghe): void {
    if (ghe.daDat) {
      return;
    }
    this.dangChon = !this.dangChon;
    this.chonGhe.emit(this.dangChon);
  }

}
