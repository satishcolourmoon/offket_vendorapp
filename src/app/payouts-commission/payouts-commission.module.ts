import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayoutsCommissionPageRoutingModule } from './payouts-commission-routing.module';

import { PayoutsCommissionPage } from './payouts-commission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutsCommissionPageRoutingModule
  ],
  declarations: [PayoutsCommissionPage]
})
export class PayoutsCommissionPageModule {}
