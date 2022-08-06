import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorreviewsPage } from './vendorreviews.page';

const routes: Routes = [
  {
    path: '',
    component: VendorreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorreviewsPageRoutingModule {}
