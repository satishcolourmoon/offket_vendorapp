import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidListPageRoutingModule } from './bid-list-routing.module';

import { BidListPage } from './bid-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidListPageRoutingModule
  ],
  declarations: [BidListPage]
})
export class BidListPageModule {}
