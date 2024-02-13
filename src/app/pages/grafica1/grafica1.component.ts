import { Component } from '@angular/core';
import { ChartData, ChartType  } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})


export class Grafica1Component {

  public labels: string[] = ['Pan','Refresco', 'Tacos'];

  public data1 = {
    datasets: [
      { 
        data: [10, 15, 200],
        backgroundColor: ['#9E120F', '#FF5800', '#FFB414']
      }
    ]
  };
  

  


}