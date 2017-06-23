import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDrivesComponent } from './all-drives.component';

describe('AllDrivesComponent', () => {
  let component: AllDrivesComponent;
  let fixture: ComponentFixture<AllDrivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDrivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
