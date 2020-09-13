import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public url = 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/';
  public maNhom = 'GP01';

  constructor(private http: HttpClient) {

  }

  getMovie(id): Observable<any> {
    return this.http.get(this.url + 'LayThongTinPhim?MaPhim=' + id);
  }

  getListMoviePaging(page, perPage): Observable<any> {
    return this.http.get(this.url + `LayDanhSachPhimPhanTrang?maNhom=${this.maNhom}&soTrang=${page}&soPhanTuTrenTrang=${perPage}`);
  }

  getListMovie(tenPhim: string | null = null): Observable<any> {
    let url = this.url + `LayDanhSachPhim?maNhom=${this.maNhom}`;

    if (tenPhim) {
      url += `&tenPhim=${tenPhim}`;
    }

    return this.http.get(url);
  }
}
