import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleDrivesComponent } from './eligible-drives.component';

describe('EligibleDrivesComponent', () => {
  let component: EligibleDrivesComponent;
  let fixture: ComponentFixture<EligibleDrivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibleDrivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibleDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
