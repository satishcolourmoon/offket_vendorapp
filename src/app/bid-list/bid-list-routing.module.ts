import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidListPage } from './bid-list.page';

const routes: Routes = [
  {
    path: '',
    component: BidListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidListPageRoutingModule {}
