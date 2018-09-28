import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string;
  constructor(private appService: AppService, private router: Router) {
    this.url = this.router.url;
    this.router.events.subscribe(path => {
      if (path instanceof NavigationStart) {
        this.url = path.url;
        console.log(this.url !== '/');
      }
    });
  }

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
