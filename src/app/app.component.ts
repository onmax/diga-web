import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.setLang();
  }
  setWidth() {
    this.appService.setWidth();
  }
  isOpen() {
    let bool: boolean;
    this.appService.mobileMenu$.subscribe(b => (bool = b));
    return bool;
  }
}
