import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VmDashboardPageRoutingModule } from './vm-dashboard-routing.module';

import { VmDashboardPage } from './vm-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VmDashboardPageRoutingModule
  ],
  declarations: [VmDashboardPage]
})
export class VmDashboardPageModule {}
