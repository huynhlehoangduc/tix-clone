import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// @ts-ignore
export class ApiService {

  public baseUrl = 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/';

  constructor(private http: HttpClient) {
  }

  handleError(error: HttpErrorResponse) {
    switch (error.status) {
      case 500:
        // Show error lỗi server
        console.log('Lỗi server');
        break;
      case 401:
        // Show error lỗi auth
        console.log('Lỗi Authorization');
        break;
      case 404:
        console.log('Lỗi 401');
        break;
      default:
        break;
    }

    return throwError(error);
  }

  /* <T> : Type động */
  get<T>(path, options = {}): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, options).pipe(catchError(this.handleError));
  }

  post<T>(path, params = {}, options = {}): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, params, options).pipe(catchError(this.handleError));
  }

  put<T>(path, params = {}, options = {}): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, params, options).pipe(catchError(this.handleError));
  }

  delete<T>(path, options = {}): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, options).pipe(catchError(this.handleError));
  }
}
