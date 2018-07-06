import { TestBed, inject } from '@angular/core/testing';

import { bookservice } from './book.service';

describe('bookservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [bookservice]
    });
  });

  it('should be created', inject([bookservice], (service: bookservice) => {
    expect(service).toBeTruthy();
  }));
});
