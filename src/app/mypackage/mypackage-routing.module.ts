import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypackagePage } from './mypackage.page';

const routes: Routes = [
  {
    path: '',
    component: MypackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypackagePageRoutingModule {}
