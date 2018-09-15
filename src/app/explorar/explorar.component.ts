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
      centeredSlides: false,
      autoHeight: true,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        // when window width is <= 320px
        500: {
          slidesPerView: 1.3
        },
        // when window width is <= 480px
        800: {
          slidesPerView: 2.3
        },
        // when window width is <= 640px
        1000: {
          slidesPerView: 3.3
        }
      }
    });
  }
}
