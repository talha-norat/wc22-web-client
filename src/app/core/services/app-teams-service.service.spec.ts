import { TestBed } from '@angular/core/testing';

import { AppTeamsService } from './app-teams-service.service';

describe('AppTeamsService', () => {
  let service: AppTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
