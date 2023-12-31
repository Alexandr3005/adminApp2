import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from '../pages/pages.component';


@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, SidebarComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
