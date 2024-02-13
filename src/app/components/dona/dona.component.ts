import { Component, Input } from '@angular/core';
import { ChartData, ChartType  } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

    ngOnInit(): void {
    // Asigna las etiquetas después de que labels haya recibido su valor de entrada
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: this.doughnutChartData.datasets,
    };
  }
  // usado en html dona 
  @Input() title: string= "Sin titulo"
  // Doughnut
  @Input('labels')  doughnutChartLabels: string[] = [
    'Label1',
    'Label2',
    'Label3',
  ];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: ['#9E120F', '#FF5800', '#FFB414']
      }
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

}
