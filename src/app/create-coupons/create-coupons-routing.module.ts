import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCouponsPage } from './create-coupons.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCouponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCouponsPageRoutingModule {}
