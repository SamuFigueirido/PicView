import { NgModule } from '@angular/core';
import { SearchComponent } from './pages/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../shared/shared.module';

/**
 * @NgModule decorator with its metadata
 * declarations: declares the components and pipes that belong to this module
 * imports: imports the SearchRoutingModule and SharedModule
 * @description The class that handles the home module
 */
@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    SearchRoutingModule,
    SharedModule
  ]
})
export class SearchModule { }
