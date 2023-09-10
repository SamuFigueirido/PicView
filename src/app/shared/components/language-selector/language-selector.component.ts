/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  languages: any = [];

  constructor(public languageSvc: LanguageService) {}

  ngOnInit(): void {
    this.languages = this.languageSvc.languages;
  }

  /**
   * Function to set the language
   * @param lang string with the language to set
   */
  setLanguage(lang: string) {
    this.languageSvc.setLanguage(lang);
  }
}
