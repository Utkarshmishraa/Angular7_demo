import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEvaluationsComponent } from './site-evaluations.component';

describe('SiteEvaluationsComponent', () => {
  let component: SiteEvaluationsComponent;
  let fixture: ComponentFixture<SiteEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
