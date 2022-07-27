import { TestBed } from '@angular/core/testing';

import { GobackService } from './goback.service';

describe('GobackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GobackService = TestBed.get(GobackService);
    expect(service).toBeTruthy();
  });
});
