import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent {
  image?: any;

  constructor(public apiSvc: ApiService) {
    this.getRandomImage();
  }

  /**
   * Function to get a random image from the API
   */
  async getRandomImage() {
    this.image = undefined;
    this.image = await this.apiSvc.getRandomImage().then((data) => data);
  }
}
