import { TestBed } from '@angular/core/testing';

import { WorldCupApiService } from './world-cup-api.service';

describe('WorldCupApiService', () => {
  let service: WorldCupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
