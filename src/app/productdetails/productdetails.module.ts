import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailsPageRoutingModule } from './productdetails-routing.module';

import { ProductdetailsPage } from './productdetails.page';
import { SafeHtmlPipe } from '../safe-html.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailsPageRoutingModule
  ],
  declarations: [ProductdetailsPage,SafeHtmlPipe]
})
export class ProductdetailsPageModule {}
