import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Movie } from '../models/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public url = 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/';
  public maNhom = 'GP01';

  constructor(private apiService: ApiService) {

  }

  getMovie(id): Observable<any> {
    return this.apiService.get<Movie[]>('LayThongTinPhim?MaPhim=' + id);
  }

  getListMoviePaging(page, perPage): Observable<any> {
    return this.apiService.get(`LayDanhSachPhimPhanTrang?maNhom=${this.maNhom}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`);
  }

  getListMovie(tenPhim: string | null = null): Observable<any> {
    let url = `LayDanhSachPhim?maNhom=${this.maNhom}`;

    if (tenPhim) {
      url += `&tenPhim=${tenPhim}`;
    }

    return this.apiService.get(url);
  }
}
