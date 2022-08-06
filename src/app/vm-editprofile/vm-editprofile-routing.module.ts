import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VmEditprofilePage } from './vm-editprofile.page';

const routes: Routes = [
  {
    path: '',
    component: VmEditprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VmEditprofilePageRoutingModule {}
