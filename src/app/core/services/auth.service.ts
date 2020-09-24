import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public baseEndpoint = 'QuanLyNguoiDung';
  public currentUserSubject = new BehaviorSubject(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(private apiService: ApiService) {
  }

  initCurrentUser(): void {
    const user = window.localStorage.getItem('currentUser');
    if (user) {
      this.currentUserSubject.next((JSON).parse(user));
    }
  }

  // Đăng ký
  signin(params: any): Observable<any> {
    return this.apiService.post(`${this.baseEndpoint}/DangKy`, params);
  }

  // Đăng nhập
  login(params: any): Observable<any> {
    return this.apiService.post(`${this.baseEndpoint}/DangNhap`, params).pipe(
      tap((result) => {
        this.currentUserSubject.next(result);
        window.localStorage.setItem('currentUser', JSON.stringify(result));
      }));
  }
}
