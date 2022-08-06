import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidProductPage } from './bid-product.page';

const routes: Routes = [
  {
    path: '',
    component: BidProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidProductPageRoutingModule {}
