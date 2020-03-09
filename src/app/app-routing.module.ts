import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotizationComponent } from './components/cotization/cotization.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'cotizacion', component: CotizationComponent }
];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
