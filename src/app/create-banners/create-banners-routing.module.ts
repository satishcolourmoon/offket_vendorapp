import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBannersPage } from './create-banners.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBannersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBannersPageRoutingModule {}
