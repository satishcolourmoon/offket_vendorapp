import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NointernetPagePageRoutingModule } from './nointernet-page-routing.module';

import { NointernetPagePage } from './nointernet-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NointernetPagePageRoutingModule
  ],
  declarations: [NointernetPagePage]
})
export class NointernetPagePageModule {}
