import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddvariantPageRoutingModule } from './addvariant-routing.module';

import { AddvariantPage } from './addvariant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddvariantPageRoutingModule
  ],
  declarations: [AddvariantPage]
})
export class AddvariantPageModule {}
