import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
