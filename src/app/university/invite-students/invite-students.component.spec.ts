import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStudentsComponent } from './invite-students.component';

describe('InviteStudentsComponent', () => {
  let component: InviteStudentsComponent;
  let fixture: ComponentFixture<InviteStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
