import { Component, OnInit } from '@angular/core';
declare var DirectionReveal;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './direction-reveal.css']
})
export class HomeComponent implements OnInit {
  imgWidth: number;
  images: HTMLElement;
  btnStaff: Object = ['direccion', 'secretaria', 'profesorado'];
  btnTeaching: Object = ['grado', 'posgrado', 'doctorado'];
  btnResearch: Object = ['grupo-id', 'grupos_innovacion'];
  btnExplore: Object = ['noticias_eventos'];

  allImages: string[] = [
    'picture1.jpg',
    'picture2.jpg',
    'picture3.jpg',
    'picture4.jpg',
    'picture5.jpg',
    'picture6.jpg'
  ];
  imgSlider: string[] = ['picture1.jpg', 'picture2.jpg', 'picture3.jpg'];
  constructor() {}

  ngOnInit() {
    this.setSlider();
    this.directionReveal();
  }
  setSlider() {
    this.images = document.getElementById('images');
    this.imgWidth = document.getElementById('image-1').offsetWidth;
    this.images.style.marginLeft = `-${this.imgWidth}px`;
  }
  slideLeft() {
    setTimeout(() => {
      //this.images.style.marginLeft = `-${this.imgWidth}px`;
      let i = this.allImages.indexOf(this.imgSlider[0]) - 1;
      if (i < 0) i = this.allImages.length - 1;
      this.imgSlider[2] = this.imgSlider[1];
      this.imgSlider[1] = this.imgSlider[0];
      this.imgSlider[0] = this.allImages[i];
    }, 300);
  }

  slideRight() {
    setTimeout(() => {
      let i = this.allImages.indexOf(this.imgSlider[2]) + 1;
      if (i >= this.allImages.length) i = 0;
      this.imgSlider[0] = this.imgSlider[1];
      this.imgSlider[1] = this.imgSlider[2];
      this.imgSlider[2] = this.allImages[i];
    }, 300);
  }
  directionReveal() {
    // Init with default setup

    // Init with all options at default setting
    const directionRevealSwing = DirectionReveal({
      selector: '.direction-reveal', // Container element selector.
      itemSelector: '.main-card-container', // Item element selector.
      animationName: 'slide', // Animation CSS class.
      enableTouch: true, // Adds touch event to show content on first click then follow link on the second click.
      touchThreshold: 250 // Touch length must be less than this to trigger reveal which prevents the event triggering if user is scrolling.
    });
  }
}
