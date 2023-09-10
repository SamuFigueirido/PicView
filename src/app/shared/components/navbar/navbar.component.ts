/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  pages = [
    { name: 'Home', translation: 'HOME.pages.home.title', route: '/', active: true },
    {
      name: 'Search',
      translation: 'HOME.pages.search.title',
      route: '/search',
      active: true,
    },
    {
      name: 'Random photo',
      translation: 'HOME.pages.randomPhoto.title',
      route: '/random-photo',
      active: true,
    },
    {
      name: 'Collections',
      translation: 'HOME.pages.collections.title',
      route: '/collections',
      active: false,
    },
    {
      name: 'Contact',
      translation: 'HOME.pages.contact.title',
      route: '/contact',
      active: false,
    },
  ];
}
