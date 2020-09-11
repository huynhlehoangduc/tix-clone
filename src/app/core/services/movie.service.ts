import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public url:string = 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/';

  constructor(private http: HttpClient) {

  }

  getMovie(id): Observable<any> {
    return this.http.get(this.url + 'LayThongTinPhim?MaPhim=' + id);
  }
}
