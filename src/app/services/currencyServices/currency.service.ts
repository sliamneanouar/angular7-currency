import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  public apiKey = '8a4f2324c01a97729a4f';
  constructor(private http: HttpClient) {}

  public getCurrency () : any {
    return this.http.get(environment.urlAPI1+"/all");
  };

  public getCurrencyById  (id): any {
    let listCurrency: any = [];
    listCurrency = this.getCurrency();
    return listCurrency.filter(item => item.alpha3Code.toLowerCase().indexOf(id.toLowerCase()) > -1);
  };

  public getCurrencyDataConvert (startDate: any , endDate: any, currencyToConvert): any {
    return this.http.get(environment.urlAPI2+"/convert?q=USD_"+currencyToConvert+",EUR_"+currencyToConvert+"&compact=ultra&date="+startDate+"&endDate="+endDate+"&apiKey="+this.apiKey)
  };
}
