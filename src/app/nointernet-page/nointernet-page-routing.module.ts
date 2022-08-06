import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NointernetPagePage } from './nointernet-page.page';

const routes: Routes = [
  {
    path: '',
    component: NointernetPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NointernetPagePageRoutingModule {}
