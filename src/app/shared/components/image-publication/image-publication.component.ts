import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-publication',
  templateUrl: './image-publication.component.html',
  styleUrls: ['./image-publication.component.scss'],
})
export class ImagePublicationComponent {
  @Input() image: any;

  constructor() {}
}
