import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   /* const user = window.localStorage.getItem('currentUser');
    const requestClone = request;
    const headersConfig: any = {
      'Content-type': 'application/json',
      Accept: 'application/json',
    };

    if (user) {
      const { accessToken } = JSON.parse(user);
      headersConfig.Authorization = 'Bearer ' + accessToken;
    }


    requestClone.clone({
      setHeaders: headersConfig,
    });
    return next.handle(requestClone);*/

    const userLogin = localStorage.getItem('currentUser');
    if (userLogin) {
      const { accessToken } = JSON.parse(userLogin);
      const req = request.clone({
        headers: request.headers.append(
          'Authorization',
          `Bearer ${accessToken}`
        ),
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}
