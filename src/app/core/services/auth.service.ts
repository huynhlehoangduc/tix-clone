import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService) {
  }

  signin(params: any): Observable<any> {
    const url = 'QuanLyNguoiDung/DangKy';
    return this.apiService.post(url, params);
  }

  login(params: any): Observable<any> {
    const url = 'QuanLyNguoiDung/DangNhap';
    return this.apiService.post(url, params);
  }
}
