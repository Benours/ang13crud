import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  products!: any;
  edit = false;
  stock = 0;

  constructor(private ps: ProductsService) {}

  canEdit() {}

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
