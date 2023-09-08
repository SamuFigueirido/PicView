import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

/**
 * @NgModule decorator with its metadata
 * declarations: declares the components and pipes that belong to this module
 * imports: imports the HomeRoutingModule and SharedModule
 * @description The class that handles the home module
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
})
export class HomeModule {}
