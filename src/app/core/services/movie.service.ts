import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Movie } from '../models/Movie';
import { ConstValue } from '../models/ConstValue';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public baseEndpoint = 'QuanLyPhim';
  public maNhom = ConstValue.maNhom;

  constructor(private apiService: ApiService) {

  }

  getMovie(id): Observable<any> {
    return this.apiService.get<Movie[]>(this.baseEndpoint + '/LayThongTinPhim?MaPhim=' + id);
  }

  getListMoviePaging(page: string = '1', perPage: string = '12'): Observable<any> {
    return this.apiService.get(`${this.baseEndpoint}/LayDanhSachPhimPhanTrang?maNhom=${this.maNhom}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`);
  }

  getListMovie(tenPhim: string | null = null): Observable<any> {
    let url = `${this.baseEndpoint}/LayDanhSachPhim?maNhom=${this.maNhom}`;

    if (tenPhim) {
      url += `&tenPhim=${tenPhim}`;
    }

    return this.apiService.get(url);
  }

  addMovie(values: any): Observable<any> {
    const url = 'QuanLyPhim/ThemPhimUploadHinh';
    const obj = {
      ...values,
      maNhom: this.maNhom,
    };

    // Bởi vì obj có 1 key là File nên phải sử dụng đối tượng FormData
    const formData = new FormData();
    for (let key in obj) {
      formData.append(key, obj[key]);
    }

    console.log(formData);

    // return this.api.post(url, { ...values, maNhom: 'GP01' });
    return this.apiService.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
