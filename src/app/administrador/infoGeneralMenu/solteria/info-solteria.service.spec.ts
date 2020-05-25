import { TestBed } from '@angular/core/testing';

import { InfoSolteriaService } from './info-solteria.service';

describe('InfoSolteriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoSolteriaService = TestBed.get(InfoSolteriaService);
    expect(service).toBeTruthy();
  });
});
