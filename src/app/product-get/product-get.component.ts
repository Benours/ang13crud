import { Component, OnInit } from '@angular/core';
import Product from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css'],
})
export class ProductGetComponent implements OnInit {
  products!: any;

  constructor(private ps: ProductsService) {}

  deleteProduct(id: number) {
    this.ps.deleteProduct(id).subscribe((res) => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
