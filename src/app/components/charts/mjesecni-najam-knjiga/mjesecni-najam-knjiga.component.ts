import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-mjesecni-najam-knjiga',
  templateUrl: './mjesecni-najam-knjiga.component.html',
  styleUrls: ['./mjesecni-najam-knjiga.component.css']
})
export class MjesecniNajamKnjigaComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 50], label: 'mjesečni najam knjiga' },
  ];
  public lineChartLabels: Label[] = ['1 sedmica', '2 sedmica', '3 sedmica', '4 sedmica'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(237,9,140)',
      backgroundColor: 'rgba(237,9,140,0.2)',
      borderWidth: 2,
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  constructor() { }

  ngOnInit() {
  }

}
