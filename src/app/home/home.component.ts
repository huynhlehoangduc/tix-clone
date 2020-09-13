import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentUser: any | null = null;

  constructor(private  authService: AuthService) {
    this.authService.initCurrentUser();
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe({
      next: value => {
        this.currentUser = value;
      }
    });
  }

}
