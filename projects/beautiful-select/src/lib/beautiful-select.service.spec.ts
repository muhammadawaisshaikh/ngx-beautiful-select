import { TestBed } from '@angular/core/testing';

import { BeautifulSelectService } from './beautiful-select.service';

describe('BeautifulSelectService', () => {
  let service: BeautifulSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeautifulSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
