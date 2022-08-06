import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkproductsPageRoutingModule } from './linkproducts-routing.module';

import { LinkproductsPage } from './linkproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkproductsPageRoutingModule
  ],
  declarations: [LinkproductsPage]
})
export class LinkproductsPageModule {}
