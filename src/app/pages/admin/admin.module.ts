import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [NavComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MaterialModule,
  ]
})
export class AdminModule { }
