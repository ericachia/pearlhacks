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

  organizations = ['Passion City Church', 'Hurricane Relief'];
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

  goToPayments(merchantList) {
    this.router.navigate(['/payment'], {queryParams: {merchantList: merchantList}});
  }
}
