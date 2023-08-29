import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Routes of the app
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: 'error/page-not-found',
    pathMatch: 'full',
  },
];

/**
 * @NgModule decorator with its metadata
 * imports: imports the RouterModule and passes the routes constant to the forRoot() method
 * exports: exports the RouterModule to be used by the AppModule
 * @description The class that handles the routing of the app module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
