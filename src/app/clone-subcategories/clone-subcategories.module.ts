import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloneSubcategoriesPageRoutingModule } from './clone-subcategories-routing.module';

import { CloneSubcategoriesPage } from './clone-subcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloneSubcategoriesPageRoutingModule
  ],
  declarations: [CloneSubcategoriesPage]
})
export class CloneSubcategoriesPageModule {}
