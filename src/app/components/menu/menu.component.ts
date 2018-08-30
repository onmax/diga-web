import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  submenuOptions: string[] = [];
  constructor(private appService: AppService, private router: Router) {
    router.events.subscribe(() => {
      this.setSubmenus();
    });
  }

  ngOnInit() {
    const links = document.querySelectorAll('.submenu a');
    links.forEach(a => {
      a.addEventListener('click', () => {
        this.closeMenu();
      });
    });
  }

  getWidthStatus() {
    return this.appService.screenWidth;
  }

  toggleSubmenu(submenu: string): void {
    if (this.submenuOptions.includes(submenu)) {
      this.submenuOptions.splice(this.submenuOptions.indexOf(submenu), 1);
    } else {
      this.submenuOptions.push(submenu);
    }
  }

  setSubmenus() {
    let url = this.router.url;
    url = url.substring(1);
    if (url === 'home') {
      this.submenuOptions = ['staff', 'teaching', 'research', 'explore'];
    } else if (['grado', 'posgrado', 'memoria'].includes(url)) {
      this.submenuOptions = ['teaching'];
    } else {
      this.submenuOptions = [];
    }
  }
  isOpen() {
    return this.appService.mobileMenu;
  }
  closeMenu() {
    this.appService.mobileMenu = false;
  }
  switchLanguage() {
    this.appService.switchLanguage();
  }
}
