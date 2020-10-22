import { Injectable } from '@angular/core';
import { ConstValue } from '../models/ConstValue';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public maNhom = ConstValue.maNhom;
  public baseEndpoint = 'QuanLyNguoiDung';

  constructor(private apiService: ApiService) {
  }

  getListUser(tuKhoa: string = null): Observable<User[]> {
    let url = `${this.baseEndpoint}/LayDanhSachNguoiDung?maNhom=${this.maNhom}`;

    if (tuKhoa) {
      url += `&tuKhoa=${tuKhoa}`;
    }

    return this.apiService.get(url);
  }

  create(user: User): Observable<User> {
    return this.apiService.post(`${this.baseEndpoint}/ThemNguoiDung`, { ...user, maNhom: this.maNhom });
  }

  update(user: User): Observable<User> {
    return this.apiService.put(`${this.baseEndpoint}/CapNhatThongTinNguoiDung`, { ...user, maNhom: this.maNhom });
  }

  delete(taiKhoan: string): Observable<string> {
    return this.apiService.delete(`${this.baseEndpoint}/XoaNguoiDung?TaiKhoan=${taiKhoan}`, { responseType: 'text' });
  }

  search(tuKhoa: string): Observable<User[]> {
    return this.apiService.get(`${this.baseEndpoint}/TimKiemNguoiDung?tuKhoa=${tuKhoa}&maNhom=${this.maNhom}`);
  }
}
