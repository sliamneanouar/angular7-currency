import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CurrencyService } from "../../services/currencyServices/currency.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.less']
})
export class DetailCurrencyComponent implements OnInit {
public _currencyData: any = [];
public _currencyDataDetail: any = [];
public _startDate: any = new Date();
public _endDate: any = new Date();
public _arrayDataChart: any = null;
  constructor(private _currencyService: CurrencyService, private route: ActivatedRoute,public datePipe: DatePipe) { }

  ngOnInit() {
    this.initDataCurrency();
  }
  public convertDataToArray(ownPropertyNames: Array<any>, curencyCode: any, dataOptions: any) : any {
    this._arrayDataChart['data'] = [[], []];
    if(ownPropertyNames !== undefined && ownPropertyNames !== null) {
      for(let i = 0; i < ownPropertyNames.length; i++) {
        this._arrayDataChart['data'][0].push(dataOptions["EUR_"+curencyCode][ownPropertyNames[i]]);
        this._arrayDataChart['data'][1].push(dataOptions["USD_"+curencyCode][ownPropertyNames[i]]);
      }
    }
  }

  public initDataCurrency(): void {
  this._startDate.setDate( (this._startDate.getDate() - 8) );
  this._startDate = this.datePipe.transform(this._startDate, "yyyy-MM-dd");
  this._endDate = this.datePipe.transform(this._endDate, "yyyy-MM-dd");
    this._currencyService.getCurrency().subscribe((data: any) => {
      this._currencyData = data;
      this._currencyDataDetail = this._currencyData.filter(item => item.alpha3Code.indexOf(this.route.snapshot.paramMap.get("id")) > -1)[0];
      this._currencyService.getCurrencyDataConvert(this._startDate,this._endDate,this._currencyDataDetail.currencies[0].code).subscribe((data: any) => {
          this._arrayDataChart = {};
          this._arrayDataChart['XaxisData'] = Object.getOwnPropertyNames(data["EUR_"+this._currencyDataDetail.currencies[0].code]);
          this.convertDataToArray(this._arrayDataChart['XaxisData'], this._currencyDataDetail.currencies[0].code, data);
      },
      error => {
        console.log('error when call listCUrrency rest service !');
      },() => null);
    },
    error => {
      console.log('error when call listCUrrency rest service !');
    },() => null);
  }
}
