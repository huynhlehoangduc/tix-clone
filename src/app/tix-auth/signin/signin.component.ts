import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ConstValue } from '../../core/models/ConstValue';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

/* Đang sử dụng Template Driven Form */

export class SigninComponent implements OnInit {

  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  dangky(values: any): void {
    this.authService.signin({...values, maNhom: ConstValue.maNhom}).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('Đăng ký thành công'),
    });
  }

}
