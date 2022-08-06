import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddoffersPage } from './addoffers.page';

const routes: Routes = [
  {
    path: '',
    component: AddoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddoffersPageRoutingModule {}
