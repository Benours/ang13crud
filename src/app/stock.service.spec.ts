import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('getProducts', () => {
    const service: StockService = TestBed.get(StockService);
    expect(service).toBeTruthy();
  });
});
