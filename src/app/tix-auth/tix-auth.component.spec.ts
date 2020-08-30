import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TixAuthComponent } from './tix-auth.component';

describe('TixAuthComponent', () => {
  let component: TixAuthComponent;
  let fixture: ComponentFixture<TixAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TixAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TixAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
