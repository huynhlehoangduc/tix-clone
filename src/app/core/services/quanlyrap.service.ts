import { Injectable } from '@angular/core';
import { ConstValue } from '../models/ConstValue';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Rap } from '../models/Rap';

@Injectable({
  providedIn: 'root'
})
export class QuanlyrapService {

  public baseEndpoint = 'QuanLyRap';
  public maNhom = ConstValue.maNhom;

  constructor(private apiService: ApiService) {
  }

  layThongTinHeThongRap(): Observable<Rap[]> {
    return this.apiService.get(`${this.baseEndpoint}/LayThongTinHeThongRap`);
  }

  layThongTinCumRapTheoHeThong(maHeThongRap): Observable<any> {
    return this.apiService.get(`${this.baseEndpoint}/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
  }

  layThongTinLichChieuPhim(maPhim: string): Observable<any> {
    return this.apiService.get(`${this.baseEndpoint}/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
  }

  layDanhSachPhongVe(maLichChieu: string): Observable<any> {
    return this.apiService.get(`QuanLyDatVe/LayDanhSachPhongVe?maLichChieu=${maLichChieu}`);
  }

  datVe(data): Observable<any> {
    return this.apiService.post(`QuanLyDatVe/DatVe`, data, { responseType: 'text' });
  }

  taoLichChieu(data): Observable<any> {
    return this.apiService.post(`QuanLyDatVe/TaoLichChieu`, data, { responseType: 'text' });
  }


}
