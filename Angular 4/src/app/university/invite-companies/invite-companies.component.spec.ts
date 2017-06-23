import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCompaniesComponent } from './invite-companies.component';

describe('InviteCompaniesComponent', () => {
  let component: InviteCompaniesComponent;
  let fixture: ComponentFixture<InviteCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
