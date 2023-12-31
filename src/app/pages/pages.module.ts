import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ DashboardComponent, 
                  Grafica1Component, 
                  ProgressComponent, 
                  PagesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
    
  ],
  exports:[
    DashboardComponent, 
                  Grafica1Component, 
                  ProgressComponent, 
                  PagesComponent
  ]
})
export class PagesModule { }
