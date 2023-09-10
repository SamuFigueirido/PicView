/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'image-publication',
  templateUrl: './image-publication.component.html',
  styleUrls: ['./image-publication.component.scss'],
})
export class ImagePublicationComponent {
  @Input() image: any;

  @Output() setImageSelectedEvent = new EventEmitter<any>();

  /**
   * Function to set and emit to the parent component the selected image
   */
  setSelectedImage() {
    this.setImageSelectedEvent.emit(this.image);
  }
}
