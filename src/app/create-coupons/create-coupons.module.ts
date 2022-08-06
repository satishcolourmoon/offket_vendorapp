import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCouponsPageRoutingModule } from './create-coupons-routing.module';

import { CreateCouponsPage } from './create-coupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCouponsPageRoutingModule
  ],
  declarations: [CreateCouponsPage]
})
export class CreateCouponsPageModule {}
