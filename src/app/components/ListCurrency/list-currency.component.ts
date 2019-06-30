import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.less']
})
export class ListCurrencyComponent implements OnInit {

  public _listCurrency: Array<any> = [];

  @Input()
  public set listCurrency(value: Array<any>) {
    this._listCurrency = value;
  }

  public get listCurrency(): Array<any> {
    return this._listCurrency;
  }
  constructor() { }

  ngOnInit() {
  }

}
