import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmregisterPage } from './confirmregister.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmregisterPageRoutingModule {}
