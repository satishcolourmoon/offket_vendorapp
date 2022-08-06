import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectdeliveryBoyPageRoutingModule } from './selectdelivery-boy-routing.module';

import { SelectdeliveryBoyPage } from './selectdelivery-boy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectdeliveryBoyPageRoutingModule
  ],
  declarations: [SelectdeliveryBoyPage]
})
export class SelectdeliveryBoyPageModule {}
