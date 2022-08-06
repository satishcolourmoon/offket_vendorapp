import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserreviewsPageRoutingModule } from './userreviews-routing.module';

import { UserreviewsPage } from './userreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserreviewsPageRoutingModule
  ],
  declarations: [UserreviewsPage]
})
export class UserreviewsPageModule {}
