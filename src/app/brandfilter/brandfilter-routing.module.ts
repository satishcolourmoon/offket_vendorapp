import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandfilterPage } from './brandfilter.page';

const routes: Routes = [
  {
    path: '',
    component: BrandfilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrandfilterPageRoutingModule {}
