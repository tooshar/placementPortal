import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewDriveComponent } from './create-new-drive.component';

describe('CreateNewDriveComponent', () => {
  let component: CreateNewDriveComponent;
  let fixture: ComponentFixture<CreateNewDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
