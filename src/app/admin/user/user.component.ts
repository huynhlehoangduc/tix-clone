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
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  displayedColumns = ['taiKhoan', 'hoTen', 'email', 'soDT', 'maLoaiNguoiDung', 'action'];
  search: string;
  searchChanged = new Subject<string>();
  /*searchResult$: Observable<User[]>;*/
  searchResult$: Subject<User[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getList();
    this.searchChanged
      .pipe(
        debounceTime(300))
      .subscribe(() => {
        this.getList();
      });

    this.searchResult$ = new Subject<User[]>();
    this.searchResult$.subscribe({
      next: res => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      complete: () => {
      }
    });
  }

  getList(): void {
    if (!this.search) {
      this.userService.getListUser().subscribe(res => {
        this.searchResult$.next(res);
      });
    } else {
      this.userService.search(this.search).subscribe(res => {
        this.searchResult$.next(res);
      });
    }
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
      if (accept) {
        this.userService.delete(taiKhoan).subscribe({
          next: value => {
            this.snackBar.open('Xóa thành công', '', { duration: 3000 });
            this.getList();
          },
          error: err => {
            console.log(err);
            this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', { duration: 3000 });
          }
        });
      }
    });
  }

  changed(event): void {
    this.searchChanged.next();
  }
}
