import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  /**
   * Function to get the images from the API
   * @param page number with the page to get the images
   * @returns a promise with the images
   */
  getImages(page: number) {
    return fetch(
      `${environment.api}photos/?page=${page}&per_pache=20&client_id=${environment.accessKey}`,
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
}
