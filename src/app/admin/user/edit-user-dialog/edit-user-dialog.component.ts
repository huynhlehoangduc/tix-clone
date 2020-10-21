import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../core/models/User';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {
  public formM: FormGroup;
  public loaiNguoiDungs = [
    { key: 'KhachHang', value: 'Khách hàng' },
    { key: 'QuanTri', value: 'Quản trị' },
  ];

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public userService: UserService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.formM = new FormGroup({
      taiKhoan: new FormControl(this.data.taiKhoan, Validators.required),
      matKhau: new FormControl(this.data.matKhau, [Validators.required, Validators.minLength(6)]),
      hoTen: new FormControl(this.data.hoTen, Validators.required),
      soDt: new FormControl(this.data.soDt, Validators.required),
      maLoaiNguoiDung: new FormControl(this.data.maLoaiNguoiDung, Validators.required),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
    });
  }

  onSubmit(): void {
    debugger;
    this.formM.markAllAsTouched();

    if (this.formM.invalid) {
      return;
    }

    const formData = { ...this.formM.value };

    if (this.data.taiKhoan) {
      this.userService.update(formData).subscribe({
        next: () => {
          this.snackBar.open('Cập nhật thành công', null, { duration: 6000 });
          this.dialogRef.close(true);
        },
        error: err => {
          this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
            duration: 3000
          });
        }
      });
    } else {
      this.userService.create(formData).subscribe({
        next: () => {
          this.snackBar.open('Thêm thành công', null, { duration: 6000 });
          this.dialogRef.close(true);
        },
        error: err => {
          this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
            duration: 3000
          });
        }
      });
    }
  }

}
