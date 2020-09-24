import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NbRegisterComponent } from '@nebular/auth'; // Đã viết ở đây

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<NbRegisterComponent> { // Đã viết ở đây
  canDeactivate(
    component: NbRegisterComponent, // Đã viết ở đây
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // If true cho rời khởi page này
    // If false không cho phép rời khỏi page này

    // Nếu form chưa chưa điển thông tin
    // Thì hiện confirm('Bạn có chắc rời khỏi trang này') sau đó return theo điều kiện
    return true;
  }

}
