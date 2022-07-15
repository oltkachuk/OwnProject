import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { CurrentBillComponent } from './current-bill/current-bill.component';
import { LastRecordComponent } from './last-record/last-record.component';
import { CurrencyRateComponent } from './currency-rate/currency-rate.component';
import { MonthAnalyticsComponent } from './month-analytics/month-analytics.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [DashbordComponent, CurrentBillComponent, LastRecordComponent, CurrencyRateComponent, MonthAnalyticsComponent],
  imports: [
    CommonModule,
    MatGridListModule, 
    MatCardModule,
    MatTabsModule
  ],
  exports: [DashbordComponent]
})
export class DashbordModule { }
