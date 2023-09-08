import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  // Infinite scroll variables
  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 2;

  // Images array
  images?: any[];

  // Page number
  page = 1;

  constructor(public apiSvc: ApiService) {
    this.getImages();
  }

  /**
   * Function to handle the scroll down event of the infinite scroll
   */
  onScrollDown() {
    this.page++;
    this.getImages();
  }

  /**
   * Function to get the images from the API
   */
  async getImages() {
    if (!this.images) {
      this.images = await this.apiSvc.getImages(this.page).then((data) => data);
    } else {
      this.images = this.images?.concat(
        await this.apiSvc.getImages(this.page).then((data) => data)
      );
    }
  }
}
