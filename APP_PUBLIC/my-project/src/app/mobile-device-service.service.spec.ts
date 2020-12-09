import { TestBed } from '@angular/core/testing';

import { MobileDeviceServiceService } from './mobile-device-service.service';

describe('MobileDeviceServiceService', () => {
  let service: MobileDeviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileDeviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
