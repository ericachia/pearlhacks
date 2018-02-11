import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatInputModule, MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DisasterReliefComponent } from './organizations/disaster-relief/disaster-relief.component';
import {NessieService} from "./nessie.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PaymentFormComponent,
    HeaderBarComponent,
    DisasterReliefComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [NessieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
