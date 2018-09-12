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
    const appendNumber = 4;
    const prependNumber = 1;
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
}
