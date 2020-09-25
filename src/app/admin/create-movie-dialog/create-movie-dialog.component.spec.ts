import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMovieDialogComponent } from './create-movie-dialog.component';

describe('CreateMovieDialogComponent', () => {
  let component: CreateMovieDialogComponent;
  let fixture: ComponentFixture<CreateMovieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMovieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
