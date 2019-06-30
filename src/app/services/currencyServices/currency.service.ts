import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor(private http: HttpClient) {}

  public getCurrency () {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  };

  public getCurrencyById  () {
    return this.http.get("https://restcountries.eu/rest/v2/all");
  };
}
