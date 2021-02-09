import { TestBed } from '@angular/core/testing';

import { LoginServisiService } from './login-servisi.service';

describe('LoginServisiService', () => {
  let service: LoginServisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
