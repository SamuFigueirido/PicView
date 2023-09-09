import { NgModule } from '@angular/core';
import { RandomComponent } from './pages/random/random.component';
import { RandomRoutingModule } from './random-routing.module';
import { SharedModule } from '../shared/shared.module';

/**
 * @NgModule decorator with its metadata
 * declarations: declares the components and pipes that belong to this module
 * imports: imports the RandomRoutingModule and SharedModule
 * @description The class that handles the home module
 */
@NgModule({
  declarations: [
    RandomComponent
  ],
  imports: [
    RandomRoutingModule,
    SharedModule
  ]
})
export class RandomModule { }
