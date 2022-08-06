import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkproductsPage } from './linkproducts.page';

const routes: Routes = [
  {
    path: '',
    component: LinkproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkproductsPageRoutingModule {}
