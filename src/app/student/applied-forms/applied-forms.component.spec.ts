import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedFormsComponent } from './applied-forms.component';

describe('AppliedFormsComponent', () => {
  let component: AppliedFormsComponent;
  let fixture: ComponentFixture<AppliedFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
