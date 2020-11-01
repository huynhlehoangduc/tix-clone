import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaoLichChieuDialogComponent } from './tao-lich-chieu-dialog.component';

describe('TaoLichChieuDialogComponent', () => {
  let component: TaoLichChieuDialogComponent;
  let fixture: ComponentFixture<TaoLichChieuDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaoLichChieuDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaoLichChieuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
