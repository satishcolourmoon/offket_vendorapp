import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorreviewsPageRoutingModule } from './vendorreviews-routing.module';

import { VendorreviewsPage } from './vendorreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorreviewsPageRoutingModule
  ],
  declarations: [VendorreviewsPage]
})
export class VendorreviewsPageModule {}
