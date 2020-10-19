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

  constructor(private apiService: ApiService) { }

  getListUser(tuKhoa: string = null): Observable<User[]> {
    let url = `${this.baseEndpoint}/LayDanhSachNguoiDung?maNhom=${this.maNhom}`;

    if (tuKhoa) {
      url += `&tuKhoa=${tuKhoa}`;
    }

    return this.apiService.get(url);
  }
}