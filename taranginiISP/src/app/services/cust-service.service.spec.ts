import { TestBed, inject } from '@angular/core/testing';

import { CustServiceService } from './cust-service.service';

describe('CustServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustServiceService]
    });
  });

  it('should be created', inject([CustServiceService], (service: CustServiceService) => {
    expect(service).toBeTruthy();
  }));
});
