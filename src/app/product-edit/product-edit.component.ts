import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  angForm!: FormGroup;
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required],
    });
  }

  updateProduct(
    ProductName: string,
    ProductDescription: string,
    ProductPrice: string
  ) {
    this.route.params.subscribe((params) => {
      this.ps.updateProduct(
        ProductName,
        ProductDescription,
        ProductPrice,
        params?.['id']
      );
      this.router.navigate(['products']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.ps.editProduct(params['id']).subscribe((res: any) => {
        this.product = res;
      });
    });
  }
}
