import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutsCommissionPage } from './payouts-commission.page';

const routes: Routes = [
  {
    path: '',
    component: PayoutsCommissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutsCommissionPageRoutingModule {}
