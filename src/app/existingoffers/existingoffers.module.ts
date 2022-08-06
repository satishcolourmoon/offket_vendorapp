import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingoffersPageRoutingModule } from './existingoffers-routing.module';

import { ExistingoffersPage } from './existingoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingoffersPageRoutingModule
  ],
  declarations: [ExistingoffersPage]
})
export class ExistingoffersPageModule {}
