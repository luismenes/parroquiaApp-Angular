import { TestBed } from '@angular/core/testing';

import { PapaService } from './papa.service';

describe('PapaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PapaService = TestBed.get(PapaService);
    expect(service).toBeTruthy();
  });
});
