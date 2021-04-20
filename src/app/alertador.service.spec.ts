import { TestBed } from '@angular/core/testing';

import { AlertadorService } from './alertador.service';

describe('AlertadorService', () => {
  let service: AlertadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
