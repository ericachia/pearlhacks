import { Component, OnInit } from '@angular/core';
import {NessieService} from "../../nessie.service";

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster-relief.component.html',
  styleUrls: ['./disaster-relief.component.css']
})

export class DisasterReliefComponent implements OnInit {

  organizations = ['Passion City Church', 'Hurricane Relief'];
  accounts: Account[] = [];

  constructor(private nessieService: NessieService) {
  }

  ngOnInit(): void {
    this.nessieService.getAllAccounts()
      .subscribe((data) => {
        this.accounts = data;
      });
  }
}
