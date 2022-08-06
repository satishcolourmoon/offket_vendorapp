import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VmEditprofilePageRoutingModule } from './vm-editprofile-routing.module';

import { VmEditprofilePage } from './vm-editprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VmEditprofilePageRoutingModule
  ],
  declarations: [VmEditprofilePage]
})
export class VmEditprofilePageModule {}
