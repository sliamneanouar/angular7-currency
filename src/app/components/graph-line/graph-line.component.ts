import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-line',
  templateUrl: './graph-line.component.html',
  styleUrls: ['./graph-line.component.less']
})
export class GraphLineComponent implements OnInit{
  public _chartOptionCallback : Array<any> = [];
  public highcharts = Highcharts;
  public chartOptions : any = {};
  public _displayChart : boolean = false;

  @Input()
  public set chartOptionCallback(value: Array<any>) {
    if(value !== undefined && value !== null) {
      this._chartOptionCallback = value;
      this.initOptionsChart();
    }
  }

  public get chartOptionCallback(): Array<any> {
    return this._chartOptionCallback;
  }


 public initOptionsChart(): void {
       var self = this;
       this._displayChart = true;
       this.chartOptions = {
             chart: {
                type: "line"
             },
             title: false,
             xAxis:{
                categories: self._chartOptionCallback['XaxisData'],
             },
             yAxis: {
                title:false
             },
             tooltip: {
             shared: true,
             formatter: function () {
                 var points = this.points;
                 var pointsLength = points.length;
                 var tooltipMarkup = pointsLength ? '<span style="font-size: 10px">' + points[0].key + '</span><br/>' : '';
                 var index;
                 var y_value_kwh;

                 for(index = 0; index < pointsLength; index += 1) {
                   y_value_kwh = (points[index].y).toFixed(2);

                   tooltipMarkup += '<span style="color:' + points[index].series.color + '">\u25CF</span> ' + points[index].series.name + ': <b>' + y_value_kwh  + '</b><br/>';
                 }

                 return tooltipMarkup;
             }
         },
             series: [
                {
                   name: 'EUR',
                   data: self._chartOptionCallback['data'][0]
                },
                {
                   name: 'USD',
                   data: self._chartOptionCallback['data'][1]
                }
             ]
          };
     }

     ngOnInit() {}
}
