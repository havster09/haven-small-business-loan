import { TestBed, inject } from '@angular/core/testing';

import { InterestRateService } from './interest-rate.service';

describe('InterestRateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestRateService]
    });
  });

  it('should be created', inject([InterestRateService], (service: InterestRateService) => {
    expect(service).toBeTruthy();
  }));
});
