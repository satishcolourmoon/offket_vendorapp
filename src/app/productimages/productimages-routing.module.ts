import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductimagesPage } from './productimages.page';

const routes: Routes = [
  {
    path: '',
    component: ProductimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductimagesPageRoutingModule {}
