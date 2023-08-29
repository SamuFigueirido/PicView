import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

/**
 * Routes of the home module
 */
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

/**
 * @NgModule decorator with its metadata
 * imports: imports the RouterModule and passes the routes constant to the forChild() method
 * exports: RouterModule of the home module
 * @description The class that handles the routing of the home module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
