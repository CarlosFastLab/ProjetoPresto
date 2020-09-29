import { TestBed } from '@angular/core/testing';

import { CardapioService } from './cardapio.service';

describe('CardapioService', () => {
  let service: CardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
