import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./pages/search/search.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'prefix',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
