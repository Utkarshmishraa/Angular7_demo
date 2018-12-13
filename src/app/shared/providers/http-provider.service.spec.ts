import { TestBed } from '@angular/core/testing';

import { HttpProvider } from './http-provider.service';

describe('HttpProvider', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpProvider = TestBed.get(HttpProvider);
    expect(service).toBeTruthy();
  });
});
