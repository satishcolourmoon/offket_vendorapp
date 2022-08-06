import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestpaymentPageRoutingModule } from './requestpayment-routing.module';

import { RequestpaymentPage } from './requestpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestpaymentPageRoutingModule
  ],
  declarations: [RequestpaymentPage]
})
export class RequestpaymentPageModule {}
