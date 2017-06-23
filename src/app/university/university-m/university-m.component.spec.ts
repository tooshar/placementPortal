import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMComponent } from './university-m.component';

describe('UniversityMComponent', () => {
  let component: UniversityMComponent;
  let fixture: ComponentFixture<UniversityMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
