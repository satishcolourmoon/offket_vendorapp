import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmregisterPageRoutingModule } from './confirmregister-routing.module';

import { ConfirmregisterPage } from './confirmregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmregisterPageRoutingModule
  ],
  declarations: [ConfirmregisterPage]
})
export class ConfirmregisterPageModule {}
