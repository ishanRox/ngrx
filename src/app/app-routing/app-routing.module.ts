
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';
import { HomeComponent } from '../home/home.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
    {path:'counter',component:CounterComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule {}
