import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import Product from '../model/product';
import { Stock } from '../model/stock';
import { ProductsService } from '../products.service';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css'],
})
export class ProductGetComponent implements OnInit {
  products!: Product[];
  stock!: Stock[];

  constructor(private ps: ProductsService, private ss: StockService) {}

  deleteProduct(id: number) {
    this.ps.deleteProduct(id).subscribe((res) => {
      this.ngOnInit();
    });
  }

  addProduct(id_product: number) {
    this.update();
    this.stock.forEach((p: Stock) => {
      let add = true;
      console.log(add);
      if (add) {
        if (p.id_product === id_product) {
          console.log('Il existe déjà!');
          this.ss.updateProduct(p.quantity + 1, id_product, p.id);
          add = false;
        } else {
          console.log("On l'ajoute");
          this.ss.addProduct(1, id_product);
        }
      }
      console.log(add);
    });
    if (this.stock.length === 0) this.ss.addProduct(1, id_product);
  }

  update() {
    console.log('Stock update manuel');
    this.ss.getStock().subscribe((data) => {
      this.stock = data;
    });
  }

  ngOnInit(): void {
    this.ps.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.ss.getStock().subscribe((data) => {
      this.stock = data;
    });
  }
}
