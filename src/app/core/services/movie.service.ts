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

  getListMoviePaging(page, perPage): Observable<any> {
    return this.apiService.get(`${this.baseEndpoint}/LayDanhSachPhimPhanTrang?maNhom=${this.maNhom}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`);
  }

  getListMovie(tenPhim: string | null = null): Observable<any> {
    let url = `${this.baseEndpoint}/LayDanhSachPhim?maNhom=${this.maNhom}`;

    if (tenPhim) {
      url += `&tenPhim=${tenPhim}`;
    }

    return this.apiService.get(url);
  }
}
