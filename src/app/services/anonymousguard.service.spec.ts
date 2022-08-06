import { TestBed } from '@angular/core/testing';

import { AnonymousguardService } from './anonymousguard.service';

describe('AnonymousguardService', () => {
  let service: AnonymousguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnonymousguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
