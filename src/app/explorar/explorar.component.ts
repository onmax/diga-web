import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['../swiper.min.css', './explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initSwiper();
  }
  initSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 15,
      slidesPerGroup: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        500: {
          slidesPerView: 1.3,
          slidesPerGroup: 1
        },
        800: {
          slidesPerView: 2.3,
          slidesPerGroup: 2
        },
        1000: {
          slidesPerView: 3.3,
          slidesPerGroup: 3
        }
      }
    });
  }
}
