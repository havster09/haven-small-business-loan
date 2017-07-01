import { TestBed, inject } from '@angular/core/testing';

import { SmallBusinessLoanService } from './small-business-loan.service';

describe('SmallBusinessLoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmallBusinessLoanService]
    });
  });

  it('should be created', inject([SmallBusinessLoanService], (service: SmallBusinessLoanService) => {
    expect(service).toBeTruthy();
  }));
});
