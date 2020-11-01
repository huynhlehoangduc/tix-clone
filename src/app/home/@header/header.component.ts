import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('currentUser') currentUser;

  constructor() { }

  ngOnInit(): void {
  }

  dangXuat(): void {
    localStorage.removeItem('currentUser');
    location.reload();
  }

}
