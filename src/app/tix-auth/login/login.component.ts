import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

/* Dùng Reactive Form */

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      taiKhoan: new FormControl('', [Validators.required]),
      matKhau: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
    });
  }

  ngOnInit(): void {
  }

  dangNhap(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => {
        console.log('Đăng nhập thành công');
        const previousRoute = localStorage.getItem('previousRoute');
        if (previousRoute) {
          this.router.navigate([previousRoute]);
          localStorage.removeItem('previousRoute');
          return;
        }
        this.router.navigate(['/']);
      },
    });
  }

}
