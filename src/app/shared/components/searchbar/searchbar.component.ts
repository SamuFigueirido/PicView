/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() queryParam?: string;

  query = new FormControl('', [Validators.required, Validators.minLength(3)]);

  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.queryParam) {
      this.query.setValue(this.queryParam);
    }
  }

  /**
   * Function to handle the submit event of the form
   * @param event event with the form data
   */
  handleSubmit(event: any) {
    event.preventDefault();
    if (this.query.invalid) {
      return;
    }
    if (this.query.value) {
      this.searchEvent.emit(this.query.value);
    }
  }
}
