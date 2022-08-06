import { TestBed } from '@angular/core/testing';

import { GlobaleventsService } from './globalevents.service';

describe('GlobaleventsService', () => {
  let service: GlobaleventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobaleventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
