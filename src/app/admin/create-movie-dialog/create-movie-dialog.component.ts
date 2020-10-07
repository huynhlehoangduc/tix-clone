import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Movie } from '../../core/models/Movie';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-create-movie-dialog',
  templateUrl: './create-movie-dialog.component.html',
  styleUrls: ['./create-movie-dialog.component.scss']
})
export class CreateMovieDialogComponent implements OnInit {
  @Output() added = new EventEmitter();
  formM: FormGroup;
  @ViewChild('imgHinhAnh') imgHinhAnh: ElementRef;

  constructor(public dialogRef: MatDialogRef<CreateMovieDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Movie,
              public movieService: MovieService) {
  }

  ngOnInit(): void {
    this.formM = new FormGroup({
      tenPhim: new FormControl('', Validators.required),
      biDanh: new FormControl('', Validators.required),
      trailer: new FormControl('', Validators.required),
      hinhAnh: new FormControl(),
      moTa: new FormControl(),
      ngayKhoiChieu: new FormControl('', Validators.required)
    });
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

  showImage(src, target) {
    var fr = new FileReader();
    // when image is loaded, set the src of the image where you want to display it
    fr.onload = function(e) {
      target.src = this.result;
    };

    fr.readAsDataURL(src.files[0]);
  }

  onSubmit(): void {
    this.formM.markAllAsTouched();

    if (this.formM.invalid) {
      return;
    }

    const { ngayKhoiChieu } = this.formM.value,
      ngayKhoiChieuParsed = ngayKhoiChieu.getDate() + '/' + (ngayKhoiChieu.getMonth() + 1) + '/' + ngayKhoiChieu.getFullYear();

    const formData = { ...this.formM.value };
    formData.ngayKhoiChieu = ngayKhoiChieuParsed;

    this.movieService.addMovie(formData).subscribe({
      next: (response) => {
        console.log(response);
      },
      complete: () => {
        this.added.emit();
      },
    });
  }

}
