import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  displayedColumns = ['taiKhoan', 'hoTen', 'email', 'soDt', 'maLoaiNguoiDung', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getListUser().subscribe({
      next: value => {
        this.dataSource = new MatTableDataSource(value);

        console.log(value);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }
}
