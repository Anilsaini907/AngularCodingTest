import { TestBed } from '@angular/core/testing';

import { ManagehttpInterceptor } from './managehttp.interceptor';

describe('ManagehttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ManagehttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ManagehttpInterceptor = TestBed.inject(ManagehttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
