import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  mobileMenu$ = new BehaviorSubject<boolean>(false);
  screenWidth: string;
  screenPX: number;
  currentLang = 'es';

  constructor(private translateService: TranslateService) {
    this.setWidth();
  }
  setLang() {
    this.translateService.setDefaultLang(this.currentLang);
  }

  switchLanguage() {
    console.log(this.translateService);
    if (this.currentLang === 'es') {
      this.currentLang = 'en';
      this.translateService.use('en');
    } else if (this.currentLang === 'en') {
      this.currentLang = 'es';
      this.translateService.use('es');
    }
    console.log(this.translateService);
  }

  setWidth() {
    this.screenPX = window.innerWidth;
    if (window.innerWidth > 992) {
      this.screenWidth = 'large';
    } else if (window.innerWidth > 502) {
      this.screenWidth = 'medium';
    } else {
      this.screenWidth = 'small';
    }
  }
}
