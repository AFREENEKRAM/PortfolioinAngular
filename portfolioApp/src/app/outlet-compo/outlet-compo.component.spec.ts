import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletCompoComponent } from './outlet-compo.component';

describe('OutletCompoComponent', () => {
  let component: OutletCompoComponent;
  let fixture: ComponentFixture<OutletCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
