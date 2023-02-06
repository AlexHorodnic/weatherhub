import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CityweatherComponent} from "./components/cityweather/cityweather.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'city-weather/:city', component: CityweatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
