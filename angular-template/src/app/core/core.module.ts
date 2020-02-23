import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [DashboardComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class CoreModule { }
