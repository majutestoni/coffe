import { TestBed } from '@angular/core/testing';

import { CoffesService } from './coffes.service';

describe('CoffesService', () => {
  let service: CoffesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
