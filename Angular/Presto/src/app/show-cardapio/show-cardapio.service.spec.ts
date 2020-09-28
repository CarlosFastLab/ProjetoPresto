import { TestBed } from '@angular/core/testing';

import { ShowCardapioService } from './show-cardapio.service';

describe('ShowCardapioService', () => {
  let service: ShowCardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
