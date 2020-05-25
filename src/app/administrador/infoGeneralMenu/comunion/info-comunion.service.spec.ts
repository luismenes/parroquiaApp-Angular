import { TestBed } from '@angular/core/testing';

import { InfoComunionService } from './info-comunion.service';

describe('InfoComunionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoComunionService = TestBed.get(InfoComunionService);
    expect(service).toBeTruthy();
  });
});
