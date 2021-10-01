import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEnrolledStudentComponent } from './view-enrolled-student.component';

describe('ViewEnrolledStudentComponent', () => {
  let component: ViewEnrolledStudentComponent;
  let fixture: ComponentFixture<ViewEnrolledStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEnrolledStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEnrolledStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
