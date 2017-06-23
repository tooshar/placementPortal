import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastApplicationsComponent } from './past-applications.component';

describe('PastApplicationsComponent', () => {
  let component: PastApplicationsComponent;
  let fixture: ComponentFixture<PastApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
