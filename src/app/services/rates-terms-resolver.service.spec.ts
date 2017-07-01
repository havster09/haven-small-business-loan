import { TestBed, inject } from '@angular/core/testing';

import { RatesTermsResolverService } from './rates-terms-resolver.service';

describe('RatesTermsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatesTermsResolverService]
    });
  });

  it('should be created', inject([RatesTermsResolverService], (service: RatesTermsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
