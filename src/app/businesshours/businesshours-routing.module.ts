import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinesshoursPage } from './businesshours.page';

const routes: Routes = [
  {
    path: '',
    component: BusinesshoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinesshoursPageRoutingModule {}
