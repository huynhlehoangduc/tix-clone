import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-thong-tin-ca-nhan',
  templateUrl: './thong-tin-ca-nhan.component.html',
  styleUrls: ['./thong-tin-ca-nhan.component.scss']
})
export class ThongTinCaNhanComponent implements OnInit {
  currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
  thongTinTaiKhoan: any = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.layThongTinTaiKhoan().subscribe((res) => {
      this.thongTinTaiKhoan = res;
    });
  }

}
