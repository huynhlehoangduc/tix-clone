import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichChieuComponent } from './lich-chieu.component';

describe('LichChieuComponent', () => {
  let component: LichChieuComponent;
  let fixture: ComponentFixture<LichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
