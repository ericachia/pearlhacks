import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
