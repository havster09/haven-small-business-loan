import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinessLoansFormComponent } from './small-business-loans-form.component';

describe('SmallBusinessLoansFormComponent', () => {
  let component: SmallBusinessLoansFormComponent;
  let fixture: ComponentFixture<SmallBusinessLoansFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBusinessLoansFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBusinessLoansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
