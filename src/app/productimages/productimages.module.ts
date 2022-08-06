import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductimagesPageRoutingModule } from './productimages-routing.module';

import { ProductimagesPage } from './productimages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductimagesPageRoutingModule
  ],
  declarations: [ProductimagesPage]
})
export class ProductimagesPageModule {}
