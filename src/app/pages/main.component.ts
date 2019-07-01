import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Router } from "@angular/router";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  public _listCurrency: Array<any> = [];
  public _listCurrencyForPagination: Array<any> = [];
  constructor(private translate: TranslateService) {
        translate.setDefaultLang('fr');
  }

}
