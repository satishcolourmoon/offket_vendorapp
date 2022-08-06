import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserreviewsPage } from './userreviews.page';

const routes: Routes = [
  {
    path: '',
    component: UserreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserreviewsPageRoutingModule {}
