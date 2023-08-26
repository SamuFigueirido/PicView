import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, ErrorRoutingModule, TranslateModule],
})
export class ErrorModule {}
