import { Component } from '@angular/core';
import { Carousel } from '../interfaces/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  // slideone = [
    // {slideSubTitle: '100% genuine Products', slideTitle: 'Tasty & Healthy Organic Food', slideBtn: 'Shop Now', slideImage: '23_690x.webp'},
    // {slideSubTitle: '100% genuine Products', slideTitle: 'Tasty & Healthy Organic Food', slideBtn: 'Shop Now', slideImage: '21_690x.webp'}
  // ]

  slides: Carousel = {
    slideSubTitle: '100% genuine Products',
    slideTitle: 'Tasty & Healthy Organic Food',
    slideBtn: 'Shop Now',
    slideImage: '23_690x.webp'
  }

  slide: Carousel[] = [
    {
      slideSubTitle: '100% genuine Products',
      slideTitle: 'Tasty & Healthy Organic Food',
      slideBtn: 'Shop Now',
      slideImage: '23_690x.webp'
    },
    {
      slideSubTitle: '100% genuine Products',
      slideTitle: "Our Garden's  Most Favorite Food",
      slideBtn: 'Shop Now',
      slideImage: '21_690x.webp'
    }
  ];

  constructor(){
    console.log(this.slide);
    
  }
}
