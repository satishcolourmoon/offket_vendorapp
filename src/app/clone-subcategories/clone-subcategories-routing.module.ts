import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloneSubcategoriesPage } from './clone-subcategories.page';

const routes: Routes = [
  {
    path: '',
    component: CloneSubcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloneSubcategoriesPageRoutingModule {}
