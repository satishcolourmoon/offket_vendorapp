import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBannersPageRoutingModule } from './offer-banners-routing.module';

import { OfferBannersPage } from './offer-banners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBannersPageRoutingModule
  ],
  declarations: [OfferBannersPage]
})
export class OfferBannersPageModule {}
