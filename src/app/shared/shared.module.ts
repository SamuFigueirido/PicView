import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** TRANSLATE */
import { TranslateModule } from '@ngx-translate/core';

/** INFINITE SCROLL */
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

/** COMPONENTS IMPORTS */
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImagePublicationComponent } from './components/image-publication/image-publication.component';
import { OffcanvasImageComponent } from './components/offcanvas-image/offcanvas-image.component';
import { FabButtonComponent } from './components/fab-button/fab-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    ImagePublicationComponent,
    OffcanvasImageComponent,
    FabButtonComponent,
  ],
  imports: [CommonModule, TranslateModule, InfiniteScrollModule],
  exports: [
    CommonModule,
    TranslateModule,
    InfiniteScrollModule,
    NavbarComponent,
    SpinnerComponent,
    ImagePublicationComponent,
    OffcanvasImageComponent,
    FabButtonComponent,
  ],
})
export class SharedModule {}
