import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAdsComponent } from './mobile-ads.component';

describe('MobileAdsComponent', () => {
  let component: MobileAdsComponent;
  let fixture: ComponentFixture<MobileAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
