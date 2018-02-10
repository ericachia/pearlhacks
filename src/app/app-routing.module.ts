import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path: 'home', component: LandingPageComponent, pathMatch: 'full'},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  exports: [
    RouterModule
  ], imports: [RouterModule.forRoot(routes, {enableTracing: false})]
})

export class AppRoutingModule {}
