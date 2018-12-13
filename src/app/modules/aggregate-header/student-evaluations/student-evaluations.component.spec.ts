import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEvaluationsComponent } from './student-evaluations.component';

describe('StudentEvaluationsComponent', () => {
  let component: StudentEvaluationsComponent;
  let fixture: ComponentFixture<StudentEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
