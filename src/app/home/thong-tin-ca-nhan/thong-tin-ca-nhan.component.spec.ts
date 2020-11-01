import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinCaNhanComponent } from './thong-tin-ca-nhan.component';

describe('ThongTinCaNhanComponent', () => {
  let component: ThongTinCaNhanComponent;
  let fixture: ComponentFixture<ThongTinCaNhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinCaNhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinCaNhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
