import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestpaymentPage } from './requestpayment.page';

const routes: Routes = [
  {
    path: '',
    component: RequestpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestpaymentPageRoutingModule {}
