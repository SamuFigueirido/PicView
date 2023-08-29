import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';

/**
 * Routes of the error module
 */
const routes: Routes = [
  { path: '', redirectTo: '/page-not-found', pathMatch: 'full' },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
];

/**
 * @NgModule decorator with its metadata
 * imports: imports the RouterModule and passes the routes constant to the forChild() method
 * exports: RouterModule of the error module
 * @description The class that handles the routing of the error module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
