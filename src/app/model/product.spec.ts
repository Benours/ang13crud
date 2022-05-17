import { inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductsService } from '../products.service';
import Product from './product';

describe('Product', () => {
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });

  it('getProducts', inject([ProductsService], (service: ProductsService) => {
    service.getProducts().subscribe((p) => {
      expect(p.length).toBe(2);

      expect(p[0]['ProductName']).toBe('Tast');
      expect(p[1]['ProductName']).toBe('Bob');
    });
  }));

  afterEach(() => {
    httpTestingController.verify();
  });
});
