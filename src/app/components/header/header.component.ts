import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

import { take } from 'rxjs/operators';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit() {}

  getWidthStatus() {
    return this.appService.screenWidth;
  }

  toggleMobileMenu() {
    let bool: boolean;
    this.appService.mobileMenu$.subscribe(b => (bool = b));
    this.appService.mobileMenu$.next(!bool);
  }
  closeMenu() {
    this.appService.mobileMenu$.next(false);
  }
}
