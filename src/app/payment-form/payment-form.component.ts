import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NessieService} from '../nessie.service';
import {Router} from '@angular/router';
import {Merchant} from '../merchant';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent{
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      amount: ''
    });
  }

  makeDonation() {
    console.log(this.form.value.amount);
  }

}

