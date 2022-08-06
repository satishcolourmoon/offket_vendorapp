import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrequestpaymentPageRoutingModule } from './addrequestpayment-routing.module';

import { AddrequestpaymentPage } from './addrequestpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddrequestpaymentPageRoutingModule
  ],
  declarations: [AddrequestpaymentPage]
})
export class AddrequestpaymentPageModule {}
