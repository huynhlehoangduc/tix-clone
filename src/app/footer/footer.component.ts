import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  partnerChunks = [
    [
      {title: 'CGV', brandLink: 'https://www.cgv.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/cgv.png'},
      {title: 'BHD', brandLink: 'http://bhdstar.vn', imgLink: 'https://tix.vn/app/assets/img/icons/bhd.png'},
      {title: 'Galaxy', brandLink: 'http://galaxycine.vn', imgLink: 'https://tix.vn/app/assets/img/icons/galaxycine.png'},
      {title: 'Cinestar', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/cinestar.png'},
      {title: 'Lotte Cinema', brandLink: 'http://lottecinemavn.com', imgLink: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'},
    ],
    [
      {title: 'CGV', brandLink: 'https://www.cgv.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/cgv.png'},
      {title: 'BHD', brandLink: 'http://bhdstar.vn', imgLink: 'https://tix.vn/app/assets/img/icons/bhd.png'},
      {title: 'Galaxy', brandLink: 'http://galaxycine.vn', imgLink: 'https://tix.vn/app/assets/img/icons/galaxycine.png'},
      {title: 'Cinestar', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/cinestar.png'},
      {title: 'Lotte Cinema', brandLink: 'http://lottecinemavn.com', imgLink: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'},
    ],
    [
      {title: 'CGV', brandLink: 'https://www.cgv.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/cgv.png'},
      {title: 'BHD', brandLink: 'http://bhdstar.vn', imgLink: 'https://tix.vn/app/assets/img/icons/bhd.png'},
      {title: 'Galaxy', brandLink: 'http://galaxycine.vn', imgLink: 'https://tix.vn/app/assets/img/icons/galaxycine.png'},
      {title: 'Cinestar', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/cinestar.png'},
      {title: 'Lotte Cinema', brandLink: 'http://lottecinemavn.com', imgLink: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'},
    ],
    [
      {title: 'CGV', brandLink: 'https://www.cgv.vn/', imgLink: 'https://tix.vn/app/assets/img/icons/cgv.png'},
      {title: 'BHD', brandLink: 'http://bhdstar.vn', imgLink: 'https://tix.vn/app/assets/img/icons/bhd.png'},
      {title: 'Galaxy', brandLink: 'http://galaxycine.vn', imgLink: 'https://tix.vn/app/assets/img/icons/galaxycine.png'},
      {title: 'Cinestar', brandLink: 'http://cinestar.com.vn', imgLink: 'https://tix.vn/app/assets/img/icons/cinestar.png'},
      {title: 'Lotte Cinema', brandLink: 'http://lottecinemavn.com', imgLink: 'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png'},
    ],
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
