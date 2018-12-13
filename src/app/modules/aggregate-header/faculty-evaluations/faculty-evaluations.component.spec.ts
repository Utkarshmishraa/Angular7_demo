import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyEvaluationsComponent } from './faculty-evaluations.component';

describe('FacultyEvaluationsComponent', () => {
  let component: FacultyEvaluationsComponent;
  let fixture: ComponentFixture<FacultyEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
