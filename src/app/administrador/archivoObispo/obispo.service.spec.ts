import { TestBed } from '@angular/core/testing';

import { ObispoService } from './obispo.service';

describe('ObispoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObispoService = TestBed.get(ObispoService);
    expect(service).toBeTruthy();
  });
});
