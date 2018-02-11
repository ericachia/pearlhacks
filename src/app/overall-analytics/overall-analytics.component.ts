import {Component, OnInit} from '@angular/core';
import {NessieService} from '../nessie.service';

@Component({
  selector: 'app-overall-analytics',
  templateUrl: './overall-analytics.component.html',
  styleUrls: ['./overall-analytics.component.css']
})
export class OverallAnalyticsComponent implements OnInit {
  merchantNames = new Set();
  merchantList: string[];
  merchantIds = new Set();
  merchantIdList: string[];
  merchantAmount: number[] = [];
  constructor(private nessieService: NessieService) {
  }

  ngOnInit(): void {
    this.nessieService.getMerchantsFromAccount()
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].amount !== 0) {
            this.merchantIds.add(data[i].merchant_id);
          }
        }
        this.merchantIdList = Array.from(this.merchantIds);
        for (let j = 0; j < this.merchantIdList.length; j++) {
          console.log(this.merchantIdList[j]);
          this.nessieService.getMerchantName(this.merchantIdList[j]).subscribe((name) => {
            this.merchantNames.add(name.name)
            this.merchantList = Array.from(this.merchantNames);
          });
          console.log('here');
          this.nessieService.getTotalMerchantPurchases(this.merchantIdList[j]).subscribe((purchase) => {
            let sum = 0;
            console.log(purchase);
            for (let k = 0; k < purchase.length; k++) {
              sum += purchase[k].amount;
            }
            this.merchantAmount.push(sum);
          });
        }
      });
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.merchantAmount, label: 'Donations ($)'},
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
