import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['Supplies', 'Rescue Efforts', 'Victim Relocation'];
  public doughnutChartData:number[] = [40, 45, 15];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(){
  }
}
