import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RapChieuPhimComponent } from './rap-chieu-phim.component';

describe('RapChieuPhimComponent', () => {
  let component: RapChieuPhimComponent;
  let fixture: ComponentFixture<RapChieuPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapChieuPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RapChieuPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
