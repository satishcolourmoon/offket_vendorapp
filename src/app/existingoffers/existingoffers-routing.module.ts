import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingoffersPage } from './existingoffers.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingoffersPageRoutingModule {}
