import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../core/models/User';
import { UserService } from '../../core/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { ConfirmDialogComponent } from '../../core/shared/confirm-dialog/confirm-dialog.component';

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

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userService.getListUser().subscribe({
      next: value => {
        this.dataSource = new MatTableDataSource(value);

        console.log(value);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  openEditDialog(user = {}): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      width: '650px',
      data: user
    });

    dialogRef.afterClosed().subscribe(added => {
      if (added) {
        this.getList();
      }
    });
  }

  delete(taiKhoan: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: 'Bạn có muốn xóa',
    });
    dialogRef.afterClosed().subscribe(accept => {
      debugger;
      if (accept) {
        this.userService.delete(taiKhoan).subscribe({
          next: value => {
            debugger;
            this.snackBar.open('Xóa thành công', '', { duration: 3000 });
            this.getList();
          },
          error: err => {
            debugger;
            console.log(err);
            this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', { duration: 3000 });
          }
        });
      }
    });
  }
}
