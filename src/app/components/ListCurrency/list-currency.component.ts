import { Component, OnInit, Output, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-list-currency',
  templateUrl: './list-currency.component.html',
  styleUrls: ['./list-currency.component.less']
})
export class ListCurrencyComponent implements OnInit {
 @ViewChild(MatPaginator) paginator: MatPaginator;
  public _listCurrency: Array<any> = [];
  public _length: number = 100;
  public _pageSize: number = 25;
  public _pageSizeOptions: Array<any> = [25, 50, 100];
  public _updatePaginationCallback: any;


  @Input()
  public set listCurrency(value: Array<any>) {
    if(value !== undefined && value !== null) {
      this._listCurrency = value;
    }
  }

  public get listCurrency(): Array<any> {
    return this._listCurrency;
  }

  @Input()
  public set updatePaginationCallback(value: any) {
    if(value !== undefined && value !== null) {
      if(typeof value === 'function') {
        this._updatePaginationCallback = value;
      }
    }
  }

  public get updatePaginationCallback(): any {
    return this._updatePaginationCallback;
  }

  @Input()
  public set pageSizeOptions(value: Array<any>) {
    if(value !== undefined && value !== null) {
      this._pageSizeOptions = value;
    }
  }

  public get pageSizeOptions(): Array<any> {
    return this._pageSizeOptions;
  }
  @Input()
  public set pageSize(value: number) {
    if(value !== undefined && value !== null) {
      this._pageSize = value;
    }
  }

  public get pageSize(): number {
    return this._pageSize;
  }
  @Input()
  public set length(value: number) {
    if(value !== undefined && value !== null) {
      this._length = value;
    }
  }

  public get length(): number {
    return this._length;
  }

  constructor(private translate: TranslateService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.translate.get('paginator').subscribe((text:any) => {
      this.paginator._intl.itemsPerPageLabel = text.itemsPerPageLabel;
      this.paginator._intl.lastPageLabel = text.lastPageLabel;
      this.paginator._intl.nextPageLabel = text.nextPageLabe;
      this.paginator._intl.previousPageLabel = text.previousPageLabel;
      });
      this.paginator.page.subscribe(
         (event) => {
           if(typeof this._updatePaginationCallback === 'function') {
             this._updatePaginationCallback(event);
           }
      });

}
}
