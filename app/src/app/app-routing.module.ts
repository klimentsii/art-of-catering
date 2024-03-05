import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hidedRoutes, routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...hidedRoutes], {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
