import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainBarsComponent } from './main-bars/main-bars.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    MainBarsComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
