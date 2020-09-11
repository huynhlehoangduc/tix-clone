import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TixCarouselComponent } from './tix-carousel.component';

describe('TixCarouselComponent', () => {
  let component: TixCarouselComponent;
  let fixture: ComponentFixture<TixCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TixCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TixCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
