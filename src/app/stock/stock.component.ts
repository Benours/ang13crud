import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';
import { ProductsService } from '../products.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  products!: any;
  edit = false;
  stock!: any;

  constructor(private ss: StockService, private ps: ProductsService) {}

  canEdit() {}

  ngOnInit(): void {
    this.ss.getStock().subscribe((data) => {
      this.stock = data;
    });
    this.ps.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
