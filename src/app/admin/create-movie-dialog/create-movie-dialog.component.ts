import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../core/models/Movie';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../core/services/movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-movie-dialog',
  templateUrl: './create-movie-dialog.component.html',
  styleUrls: ['./create-movie-dialog.component.scss']
})
export class CreateMovieDialogComponent implements OnInit, AfterViewInit {
  formM: FormGroup;
  @ViewChild('imgHinhAnh') imgHinhAnh: ElementRef;

  constructor(public dialogRef: MatDialogRef<CreateMovieDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Movie,
              public movieService: MovieService,
              private snackBar: MatSnackBar,
              public datepipe: DatePipe) {
  }

  ngOnInit(): void {
    this.formM = new FormGroup({
      tenPhim: new FormControl(this.data.tenPhim, Validators.required),
      biDanh: new FormControl(this.data.biDanh, Validators.required),
      trailer: new FormControl(this.data.trailer, Validators.required),
      hinhAnh: new FormControl(),
      moTa: new FormControl(this.data.moTa),
      ngayKhoiChieu: new FormControl(this.data.ngayKhoiChieu, Validators.required)
    });
  }

  ngAfterViewInit(): void {
    if (this.data.hinhAnh) {
      this.imgHinhAnh.nativeElement.src = this.data.hinhAnh;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileSelected(event): void {
    this.formM.patchValue({ hinhAnh: event.target.files[0] });
    console.log(this.formM);
    console.log(this.imgHinhAnh);
    this.showImage(event.target, this.imgHinhAnh.nativeElement);
  }

  showImage(src, target): void {
    const fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function(): void {
      target.src = this.result;
    };

    fr.readAsDataURL(src.files[0]);
  }

  onSubmit(): void {
    this.formM.markAllAsTouched();

    if (this.formM.invalid) {
      return;
    }

    let { ngayKhoiChieu } = this.formM.value;
    if (typeof ngayKhoiChieu === 'string') {
      ngayKhoiChieu = new Date(ngayKhoiChieu);
    }
    let dNgayKhoiChieu = ngayKhoiChieu.getDate();
    let mNgayKhoiChieu = ngayKhoiChieu.getMonth() + 1;

    dNgayKhoiChieu = dNgayKhoiChieu < 10 ? `0${dNgayKhoiChieu}` : dNgayKhoiChieu;
    mNgayKhoiChieu = mNgayKhoiChieu < 10 ? `0${mNgayKhoiChieu}` : mNgayKhoiChieu;

    const ngayKhoiChieuParsed = dNgayKhoiChieu + '/' + mNgayKhoiChieu + '/' + ngayKhoiChieu.getFullYear();

    const formData = { ...this.formM.value };
    formData.ngayKhoiChieu = ngayKhoiChieuParsed;

    if (this.data.maPhim) {
      formData.maPhim = this.data.maPhim;
      if (formData.hinhAnh) {
        this.movieService.updateMovieWithImg(formData).subscribe({
          next: () => {
            this.snackBar.open('Cập nhật phim thành công', null, { duration: 6000 });
            this.dialogRef.close(true);
          },
          error: err => {
            console.log(err);
            this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
              duration: 3000
            });
          }
        });
      } else {
        this.movieService.updateMovie(formData).subscribe({
          next: () => {
            this.snackBar.open('Cập nhật phim thành công', null, { duration: 6000 });
            this.dialogRef.close(true);
          },
          error: err => {
            console.log(err);
            this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
              duration: 3000
            });
          }
        });
      }
    } else {
      this.movieService.addMovie(formData).subscribe({
        next: () => {
          this.snackBar.open('Thêm phim thành công', null, { duration: 6000 });
          this.dialogRef.close(true);
        },
        error: err => {
          console.log(err);
          this.snackBar.open(typeof err.error === 'string' ? err.error : err.error.text, '', {
            duration: 3000
          });
          this.dialogRef.close();
        }
      });
    }
  }

}
