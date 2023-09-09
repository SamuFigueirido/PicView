import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'offcanvas-image',
  templateUrl: './offcanvas-image.component.html',
  styleUrls: ['./offcanvas-image.component.scss'],
})
export class OffcanvasImageComponent implements OnInit {
  @Input() image: any;

  @Output() removeImage = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    const offcanvasImage = document.getElementById('offcanvasImage');
    if (offcanvasImage) {
      offcanvasImage.addEventListener('hidden.bs.offcanvas', (event) => {
        this.image = null;
      });
    }
  }

  /**
   * Function to remove the selected image
   */
  removeSelectedImage() {
    this.removeImage.emit(true);
  }

  /**
   * Function to format the date
   * @param fulldate to format as a date
   * @returns formatted date
   */
  formatDate(fulldate: string) {
    const date = new Date(fulldate);
    return (
      date.toLocaleDateString('en-GB', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }) +
      ' at ' +
      date.toLocaleTimeString('en-GB')
    );
  }
}
