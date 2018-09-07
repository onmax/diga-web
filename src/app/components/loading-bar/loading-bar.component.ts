import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnChanges {
  transitionDuration = '1s';
  @Input()
  width = 0;
  left = 0;
  borderRadius = '4px 0 0 0';
  constructor() {}

  ngOnChanges() {
    if (this.width >= 96) {
      this.borderRadius = '4px 4px 0 0';
    }

    if (this.width === 100) {
      this.borderRadius = '0 4px 0 0';
      setTimeout(() => {
        this.left = 100;
        this.width = 0;
      }, this.transitionDuration);
    }
  }
}
