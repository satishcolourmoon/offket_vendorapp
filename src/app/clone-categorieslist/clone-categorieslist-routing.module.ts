import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloneCategorieslistPage } from './clone-categorieslist.page';

const routes: Routes = [
  {
    path: '',
    component: CloneCategorieslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloneCategorieslistPageRoutingModule {}
