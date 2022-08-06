import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingproductPage } from './existingproduct.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingproductPageRoutingModule {}
