import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-item-currency',
  templateUrl: './item-currency.component.html',
  styleUrls: ['./item-currency.component.less']
})
export class ItemCurrencyComponent implements OnInit {
  public _itemCurrency: any = {};
  constructor() { }

  @Input()
  public set itemCurrency(value: any) {
    if(value !== undefined && value !== null) {
      this._itemCurrency = value;
    }
  }

  public get itemCurrency(): any {
    return this._itemCurrency;
  }
  ngOnInit() {
  }

}
