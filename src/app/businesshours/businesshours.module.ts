import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinesshoursPageRoutingModule } from './businesshours-routing.module';

import { BusinesshoursPage } from './businesshours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinesshoursPageRoutingModule
  ],
  declarations: [BusinesshoursPage]
})
export class BusinesshoursPageModule {}
