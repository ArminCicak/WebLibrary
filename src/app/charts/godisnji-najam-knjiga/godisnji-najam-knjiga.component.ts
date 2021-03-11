import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-godisnji-najam-knjiga',
  templateUrl: './godisnji-najam-knjiga.component.html',
  styleUrls: ['./godisnji-najam-knjiga.component.css']
})
export class GodisnjiNajamKnjigaComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Jan', 'Febr', 'Mart', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Okt', 'Nov', 'Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { barPercentage: 0.4,
        barThickness: 20,
        maxBarThickness: 20,
        minBarLength: 2,      
      data: [65, 59, 80, 81, 56, 55, 40, 20, 40, 59, 47], label: 'Godišnji najam knjiga' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

   public barChartColors: any[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'rgba(25,32,71,0.2)',
      borderWidth: 2,
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
