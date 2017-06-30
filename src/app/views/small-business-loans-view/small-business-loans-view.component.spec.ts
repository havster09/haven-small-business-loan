import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBusinessLoansViewComponent } from './small-business-loans-view.component';

describe('SmallBusinessLoansViewComponent', () => {
  let component: SmallBusinessLoansViewComponent;
  let fixture: ComponentFixture<SmallBusinessLoansViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBusinessLoansViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBusinessLoansViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
