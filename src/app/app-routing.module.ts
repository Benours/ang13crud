import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';

const routes: Routes = [
  {
    path: 'product/create',
    loadChildren: () =>
      import('./product-add/product-add.module').then(
        (m) => m.ProductAddModule
      ),
  },
  {
    path: 'edit/:id',
    loadChildren: () =>
      import('./product-edit/product-edit.module').then(
        (m) => m.ProductEditModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./product-get/product-get.module').then(
        (m) => m.ProductGetModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./stock/stock.module').then((m) => m.StockModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
