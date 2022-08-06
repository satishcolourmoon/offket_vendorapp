import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrequestpaymentPage } from './addrequestpayment.page';

const routes: Routes = [
  {
    path: '',
    component: AddrequestpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddrequestpaymentPageRoutingModule {}
