import { TestBed } from '@angular/core/testing';

import { RobeService } from './robe.service';

describe('RobeService', () => {
  let service: RobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
