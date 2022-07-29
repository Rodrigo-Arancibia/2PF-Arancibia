import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SidepanelComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SidepanelComponent, NavbarComponent]
})
export class SharedModule { }
