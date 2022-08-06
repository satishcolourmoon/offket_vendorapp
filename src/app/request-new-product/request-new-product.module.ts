import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestNewProductPageRoutingModule } from './request-new-product-routing.module';

import { RequestNewProductPage } from './request-new-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestNewProductPageRoutingModule
  ],
  declarations: [RequestNewProductPage]
})
export class RequestNewProductPageModule {}
