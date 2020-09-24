import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-ads',
  templateUrl: './mobile-ads.component.html',
  styleUrls: ['./mobile-ads.component.scss']
})
export class MobileAdsComponent implements OnInit {

  slideConfig = { dots : true, prevArrow: false, nextArrow: false };

  constructor() { }

  ngOnInit(): void {
  }

}
