import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fab-button',
  templateUrl: './fab-button.component.html',
  styleUrls: ['./fab-button.component.scss']
})
export class FabButtonComponent {
  @Output() clickEvent = new EventEmitter();

  click() {
    this.clickEvent.emit();
  }
}
