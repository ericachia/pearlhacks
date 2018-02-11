import { Component, OnInit } from '@angular/core';
import {NessieService} from '../../nessie.service';
import {Merchant} from '../../merchant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster-relief.component.html',
  styleUrls: ['./disaster-relief.component.css']
})

export class DisasterReliefComponent implements OnInit {
  merchants: Merchant[] = [];

  constructor(private nessieService: NessieService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.nessieService.getAllMerchants()
      .subscribe((data) => {
        this.merchants = data;
      });
  }

  goToPayments(merchantId) {
    this.router.navigate(['/payment'], {queryParams: {merchantId: merchantId}});
  }
}
