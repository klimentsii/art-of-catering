import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hidedRoutes, routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...hidedRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
