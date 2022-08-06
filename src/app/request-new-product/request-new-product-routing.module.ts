import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestNewProductPage } from './request-new-product.page';

const routes: Routes = [
  {
    path: '',
    component: RequestNewProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestNewProductPageRoutingModule {}
