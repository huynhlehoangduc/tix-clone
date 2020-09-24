import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = window.localStorage.getItem('currentUser');

    if (user) {
      const { maLoaiNguoiDung } = JSON.parse(user);
      if (maLoaiNguoiDung === 'QuanTri') {
        return true;
      }
    }

    this.router.navigate(['/auth/login']);
    return false;
  }

}
