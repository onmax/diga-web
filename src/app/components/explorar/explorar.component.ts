import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { SpreadsheetsService } from "../../spreadsheets.service";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrls: ['../../swiper.min.css', './explorar.component.css']
})
export class ExplorarComponent implements OnInit {
  items = [];
  constructor(private spreadsheetsService: SpreadsheetsService) {}

  ngOnInit() {
    this.initSwiper();
    this.spreadsheetsService.getJSON(environment.spreadsheets.explore).subscribe(res => {
      res.feed.entry.map(row => {
        this.items.push(
          {
            title: row.gsx$titulo.$t,
            description: row.gsx$descripcion.$t,
            img: row.gsx$imagen.$t,
            url: row.gsx$link.$t
          }
        );
      });
    });
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
