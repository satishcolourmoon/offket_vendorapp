import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBannersPageRoutingModule } from './create-banners-routing.module';

import { CreateBannersPage } from './create-banners.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBannersPageRoutingModule
  ],
  declarations: [CreateBannersPage]
})
export class CreateBannersPageModule {}
