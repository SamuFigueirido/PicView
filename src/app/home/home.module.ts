import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';

import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * @NgModule decorator with its metadata
 * declarations: declares the components and pipes that belong to this module
 * imports: imports the CommonModule, HomeRoutingModule and TranslateModule
 * exports: exports the NavbarComponent
 * @description The class that handles the home module
 */
@NgModule({
  declarations: [HomeComponent, NavbarComponent],
  imports: [CommonModule, HomeRoutingModule, TranslateModule],
  exports: [NavbarComponent],
})
export class HomeModule {}
