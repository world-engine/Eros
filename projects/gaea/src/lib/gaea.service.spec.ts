import { TestBed } from '@angular/core/testing';

import { GaeaService } from './gaea.service';

describe('GaeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GaeaService = TestBed.get(GaeaService);
    expect(service).toBeTruthy();
  });
});
