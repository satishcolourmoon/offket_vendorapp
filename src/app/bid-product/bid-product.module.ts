import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidProductPageRoutingModule } from './bid-product-routing.module';

import { BidProductPage } from './bid-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidProductPageRoutingModule
  ],
  declarations: [BidProductPage]
})
export class BidProductPageModule {}
