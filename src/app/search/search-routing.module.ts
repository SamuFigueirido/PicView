import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { RouterModule, Routes } from '@angular/router';

/**
 * Routes of the search module
 */
const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
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
export class SearchRoutingModule {}
