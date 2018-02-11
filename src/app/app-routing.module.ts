import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import {DisasterReliefComponent} from './organizations/disaster-relief/disaster-relief.component';
import {AnalyticsComponent} from './analytics/analytics.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'payment', component: PaymentFormComponent, pathMatch: 'full'},
  {path: 'disaster-relief', component: DisasterReliefComponent, pathMatch: 'full'},
  {path: 'analytics', component: AnalyticsComponent, pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  exports: [
    RouterModule
  ], imports: [RouterModule.forRoot(routes, {enableTracing: false})]
})

export class AppRoutingModule {}
