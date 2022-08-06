import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VmDashboardPage } from './vm-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: VmDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VmDashboardPageRoutingModule {}
