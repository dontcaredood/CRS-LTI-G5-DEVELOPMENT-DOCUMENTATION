import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPendingStudentsComponent } from './show-pending-students.component';

describe('ShowPendingStudentsComponent', () => {
  let component: ShowPendingStudentsComponent;
  let fixture: ComponentFixture<ShowPendingStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPendingStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPendingStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
