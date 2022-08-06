import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypackagePageRoutingModule } from './mypackage-routing.module';

import { MypackagePage } from './mypackage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypackagePageRoutingModule
  ],
  declarations: [MypackagePage]
})
export class MypackagePageModule {}
