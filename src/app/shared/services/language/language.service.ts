import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages = [
    { code: 'en', label: 'English', img: 'assets/img/flags/en.png' },
    { code: 'es', label: 'Español', img: 'assets/img/flags/es.png' },
  ];

  constructor(public translateSvc: TranslateService) {}

  /**
   * Function to set the initial language to the app
   * If the user has a language set in the local storage, it will be used
   * If not, the default language will be used
   * The default language is set to English
   */
  setInitialLanguage() {
    this.translateSvc.setDefaultLang('en');

    const language = localStorage.getItem('language');
    if (language) {
      this.setLanguage(language);
    }
  }

  /**
   * Function to set the language
   * @param lang string with the language to set
   * The language is set to the translate service and to the local storage
   */
  setLanguage(lang: string) {
    this.translateSvc.use(lang);
    localStorage.setItem('language', lang);
  }
}
