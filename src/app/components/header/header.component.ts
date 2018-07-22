import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

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
    this.appService.mobileMenu = !this.appService.mobileMenu;
  }
  closeMenu() {
    this.appService.mobileMenu = false;
  }
}
