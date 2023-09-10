import { Component } from '@angular/core';
import { LanguageService } from './shared/services/language/language.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  /**
   * Constructor of the class AppComponent
   * @param translate LanguageService to set the initial language to the app
   */
  constructor(languageSvc: LanguageService) {
    languageSvc.setInitialLanguage();
  }
}
