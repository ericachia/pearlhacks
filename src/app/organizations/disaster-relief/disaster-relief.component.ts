import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster-relief.component.html',
  styleUrls: ['./disaster-relief.component.css']
})

export class DisasterReliefComponent {

  organizations: String[];

  constructor() {
    this.organizations = ['Passion City Church', 'Hurricane Relief'];
  }

}
