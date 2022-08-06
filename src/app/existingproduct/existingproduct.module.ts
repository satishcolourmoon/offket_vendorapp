import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingproductPageRoutingModule } from './existingproduct-routing.module';

import { ExistingproductPage } from './existingproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingproductPageRoutingModule
  ],
  declarations: [ExistingproductPage]
})
export class ExistingproductPageModule {}
