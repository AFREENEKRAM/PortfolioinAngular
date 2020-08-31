import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExprComponent } from './job-expr.component';

describe('JobExprComponent', () => {
  let component: JobExprComponent;
  let fixture: ComponentFixture<JobExprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobExprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobExprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
