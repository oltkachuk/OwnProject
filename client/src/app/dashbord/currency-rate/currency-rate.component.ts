import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://bank.gov.ua/NBU_Exchange/exchange_site?start=20220115&end=20220131&valcode=eur&sort=exchangedate&order=desc&json')
      .subscribe(res => {
        console.log(res)
      })
  }

}
