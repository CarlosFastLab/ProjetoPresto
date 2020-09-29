import { TestBed } from '@angular/core/testing';

import { CardapioDetailService } from './cardapio-detail.service';

describe('CardapioDetailService', () => {
  let service: CardapioDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
