import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';
import DirectionReveal from 'direction-reveal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../swiper.min.css',
    './direction-reveal.css'
  ]
})
export class HomeComponent implements OnInit {
  swiperImages: string[] = [
    'picture1.jpg',
    'picture2.jpg',
    'picture3.jpg',
    'picture4.jpg',
    'picture5.jpg',
    'picture6.jpg'
  ];
  fixDirectionReveal = '0';

  constructor() {}

  ngOnInit() {
    this.directionReveal();
  }

  directionReveal() {
    DirectionReveal({
      selector: '.cards-home', // Container element selector.
      itemSelector: '.card-home', // Item element selector.
      animationName: 'slide', // Animation CSS class.
      enableTouch: true, // Adds touch event to show content on first click then follow link on the second click.
      touchThreshold: 250 // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
    });

    setTimeout(() => {
      this.fixDirectionReveal = '.3s';
      const swiper = new Swiper('.swiper-container', {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }, 300);
  }
}
