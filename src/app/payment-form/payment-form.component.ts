import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NessieService} from '../nessie.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Merchant} from '../merchant';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent implements OnInit{
  form: FormGroup;
  merchantId: string;
  objs: any;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private nessieService: NessieService) {
    this.form = this.fb.group({
      amount: ''
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => this.merchantId = params['merchantId']);
  }

  makeDonation() {
    this.nessieService.makePayment()
      .subscribe((data) => {
        this.objs = data;
        console.log(this.objs);
      });
  }

}

