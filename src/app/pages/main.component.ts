import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import { CurrencyService } from "../services/currencyServices/currency.service";
import { HttpModule } from '@angular/http';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  public _listCurrency: Array<any> = [];
  constructor(private translate: TranslateService, private _currencyService: CurrencyService) {
        translate.setDefaultLang('fr');
        this.initCurrencyDataFromAPI();
  }

  public initCurrencyDataFromAPI(offset, page): void {
    this._currencyService.getCurrency().subscribe((data: any) => {
        this._listCurrency = data.slice(0, 15);
    },
    error => {
      console.log('error when call listCUrrency rest service !');
    },() => null);
  }

}
