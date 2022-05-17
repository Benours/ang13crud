import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from './model/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  uri = 'http://localhost:3000/stock';

  constructor(private http: HttpClient) {}

  addProduct(quantity: number, id_product: number) {
    const date_stock = new Date();
    const obj = {
      quantity,
      id_product,
      date_stock,
    };
    console.log(obj);
    this.http.post(`${this.uri}`, obj).subscribe((res) => console.log('DONE!'));
  }

  getStock() {
    return this.http.get<Stock[]>(`${this.uri}`);
  }

  updateProduct(quantity: number, id_product: number, id: number) {
    const obj = {
      quantity,
      id_product,
    };
    this.http
      .put(`${this.uri}/${id}`, obj)
      .subscribe((res) => console.log('DONE!'));
  }
}
