import { TestBed, inject } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('getProducts', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
