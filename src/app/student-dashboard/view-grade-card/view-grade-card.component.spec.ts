import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGradeCardComponent } from './view-grade-card.component';

describe('ViewGradeCardComponent', () => {
  let component: ViewGradeCardComponent;
  let fixture: ComponentFixture<ViewGradeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGradeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGradeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
