import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {CdkMenuModule} from '@angular/cdk/menu';
import { DashbordModule } from 'src/app/dashbord/dashbord.module';








@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    CdkMenuModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
