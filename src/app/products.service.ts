import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  uri = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  addProduct(
    ProductName: string,
    ProductDescription: string,
    ProductPrice: string
  ) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice,
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe((res) => console.log('DONE!'));
  }

  getProducts() {
    return this.http.get(`${this.uri}`);
  }

  editProduct(id: number) {
    return this.http.get(`${this.uri}/${id}`);
  }

  updateProduct(
    ProductName: string,
    ProductDescription: string,
    ProductPrice: string,
    id: number
  ) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice,
    };
    this.http
      .put(`${this.uri}/${id}`, obj)
      .subscribe((res) => console.log('Done'));
  }

  deleteProduct(id: number) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
