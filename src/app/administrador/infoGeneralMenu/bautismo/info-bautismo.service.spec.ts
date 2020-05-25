import { TestBed } from '@angular/core/testing';

import { InfoBautismoService } from './info-bautismo.service';

describe('InfoBautismoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoBautismoService = TestBed.get(InfoBautismoService);
    expect(service).toBeTruthy();
  });
});
