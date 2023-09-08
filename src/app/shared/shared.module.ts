import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** TRANSLATE */
import { TranslateModule } from '@ngx-translate/core';

/** INFINITE SCROLL */
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

/** COMPONENTS IMPORTS */
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [NavbarComponent, SpinnerComponent],
  imports: [CommonModule, TranslateModule, InfiniteScrollModule],
  exports: [
    CommonModule,
    TranslateModule,
    InfiniteScrollModule,
    NavbarComponent,
    SpinnerComponent,
  ],
})
export class SharedModule {}
