import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  mobileMenu: boolean = false;
  screenWidth: string = '';
  currentLang: string = 'es';
  constructor(private translateService: TranslateService) {
    this.setWidth();
  }

  setLang() {
    this.translateService.setDefaultLang(this.currentLang);
  }

  switchLanguage() {
    if (this.currentLang == 'es') {
      this.currentLang = 'en';
      this.translateService.use('en');
    } else if (this.currentLang == 'en') {
      this.currentLang = 'es';
      this.translateService.use('es');
    }
  }

  setWidth = () => {
    if (window.innerWidth > 992) this.screenWidth = 'large';
    else if (window.innerWidth > 502) this.screenWidth = 'medium';
    else this.screenWidth = 'small';
  };
}
