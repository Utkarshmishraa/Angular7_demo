import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationDateRangeComponent } from './evaluation-date-range.component';

describe('EvaluationDateRangeComponent', () => {
  let component: EvaluationDateRangeComponent;
  let fixture: ComponentFixture<EvaluationDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
