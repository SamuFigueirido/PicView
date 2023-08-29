import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * @NgModule decorator with its metadata
 * declarations: declares the components and pipes that belong to this module
 * imports: imports the CommonModule, ErrorRoutingModule and TranslateModule
 * @description The class that handles the error module
 */
@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ErrorRoutingModule, TranslateModule],
})
export class ErrorModule {}
