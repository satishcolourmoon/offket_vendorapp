import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferBannersPage } from './offer-banners.page';

const routes: Routes = [
  {
    path: '',
    component: OfferBannersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferBannersPageRoutingModule {}
