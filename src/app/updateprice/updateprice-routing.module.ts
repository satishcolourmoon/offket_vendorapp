import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepricePage } from './updateprice.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepricePageRoutingModule {}
