import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  // Query
  query: string = '';
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedroute.queryParams.subscribe((params) => {
      if (params['q']) {
        this.query = params['q'];
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
}
