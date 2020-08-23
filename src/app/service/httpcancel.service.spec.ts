import { TestBed } from '@angular/core/testing';

import { HttpcancelService } from './httpcancel.service';

describe('HttpcancelService', () => {
  let service: HttpcancelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcancelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
