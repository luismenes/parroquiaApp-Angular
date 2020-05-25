import { TestBed } from '@angular/core/testing';

import { InfoConfirmacionService } from './info-confirmacion.service';

describe('InfoConfirmacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoConfirmacionService = TestBed.get(InfoConfirmacionService);
    expect(service).toBeTruthy();
  });
});
