import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloneCategorieslistPageRoutingModule } from './clone-categorieslist-routing.module';

import { CloneCategorieslistPage } from './clone-categorieslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloneCategorieslistPageRoutingModule
  ],
  declarations: [CloneCategorieslistPage]
})
export class CloneCategorieslistPageModule {}
