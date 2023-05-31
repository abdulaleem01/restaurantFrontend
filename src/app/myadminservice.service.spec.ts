import { TestBed } from '@angular/core/testing';

import { MyadminserviceService } from './myadminservice.service';

describe('MyadminserviceService', () => {
  let service: MyadminserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyadminserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
