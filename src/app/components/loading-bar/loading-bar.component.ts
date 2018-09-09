import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnChanges {
  transitionDuration = 0.3;
  @Input()
  width = 25;
  left = 0;
  constructor() {}

  ngOnChanges() {
    if (this.width === undefined) {
      this.width = 50;
    }
    if (this.width === 100) {
      setTimeout(() => {
        this.left = 100;
        this.width = 0;
      }, this.transitionDuration * 1000);
    }
  }
}
