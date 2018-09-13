import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css']
})
export class LoadingBarComponent implements OnChanges {
  transitionDuration = .3;
  @Input()
  width = 0;
  left = 0;
  borderRadius = '4px 0 0 0';
  constructor() {}

  ngOnChanges() {
    if (this.width >= 96) {
      this.borderRadius = '4px 4px 0 0';
      setTimeout(() => {
        this.borderRadius = '0 4px 0 0';
        this.left = 100;
        this.width = 0;
      }, this.transitionDuration * 1000);
    }
  }
}
