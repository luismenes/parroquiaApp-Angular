import { TestBed } from '@angular/core/testing';

import { InfoMatrimonioService } from './info-matrimonio.service';

describe('InfoMatrimonioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoMatrimonioService = TestBed.get(InfoMatrimonioService);
    expect(service).toBeTruthy();
  });
});
