import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  // Infinite scroll variables
  throttle = 500;
  scrollDistance = 1;
  scrollUpDistance = 2;

  // Images array
  images?: unknown[];

  // Selected image
  selectedImage?: unknown;

  // Page number
  page = 1;

  // Query
  query = '';

  // Loading
  showLoading = false;

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
    public apiSvc: ApiService
  ) {
    this.activatedroute.queryParams.subscribe((params) => {
      if (params['q']) {
        this.query = params['q'];
        this.getImagesByQuery();
      }
    });
  }

  /**
   * Function to handle the search event of the searchbar
   * @param query string with the query to search
   */
  getSearchQuery(query: string) {
    this.router.navigate([], {
      relativeTo: this.activatedroute,
      queryParams: { q: query },
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Function to handle the scroll down event of the infinite scroll
   */
  onScrollDown() {
    this.page++;
    this.getImagesByQueryConcat();
  }

  /**
   * Function to get the images from the API by query
   */
  async getImagesByQuery() {
    this.showLoading = true;
    this.images = await this.apiSvc
      .getImagesByQuery(this.query, this.page)
      .then((data) => data.results)
      .finally(() => {
        this.showLoading = false;
      });
  }

  /**
   * Function to get the images from the API by query and concat the results to the images array
   * @returns a promise with the images
   */
  async getImagesByQueryConcat() {
    this.images = this.images?.concat(
      await this.apiSvc
        .getImagesByQuery(this.query, this.page)
        .then((data) => data.results)
        .finally(() => {
          this.showLoading = false;
        })
    );
  }

  /**
   * Function to set the selected image
   * @param image to set as selected
   */
  setSelectedImage(image: unknown) {
    this.selectedImage = image;
  }
}
