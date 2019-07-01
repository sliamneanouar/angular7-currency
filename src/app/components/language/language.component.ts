import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less']
})
export class LanguageComponent implements OnInit {
public languageFlag: string = "France";
public languageName: string = "FR";

  constructor(private translate: TranslateService) {
      translate.setDefaultLang('fr');
    }

  public updateLanguage(language: string) {
    this.translate.setDefaultLang(language);
    this.languageName = language.toUpperCase();
  }

  ngOnInit() {
  }

}
