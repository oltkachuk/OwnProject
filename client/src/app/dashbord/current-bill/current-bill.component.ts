import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  class_name: string;
  color: string
}

@Component({
  selector: 'app-current-bill',
  templateUrl: './current-bill.component.html',
  styleUrls: ['./current-bill.component.scss']
})
export class CurrentBillComponent implements OnInit {
  asyncTabs: Observable<ExampleTab[]>;

  constructor() { 
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'UAH', class_name: 'uah', color: '#e3e1b1'},
          {label: 'USD', class_name: 'usd', color: '#c2e3b1'},
          {label: 'EUR', class_name: 'eur', color: '#b1dce3'},
        ]);
      }, 1000);
    });
   }

  ngOnInit(): void {
  }

}
