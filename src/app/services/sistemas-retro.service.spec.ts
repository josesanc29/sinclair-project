import { TestBed } from '@angular/core/testing';

import { SistemasRetroService } from './sistemas-retro.service';

describe('SistemasRetroService', () => {
  let service: SistemasRetroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasRetroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
