import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  image = [
    {slideSubTitle: '100% genuine Products', slideTitle: 'Tasty & Healthy Organic Food', slideBtn: 'Shop Now', slideImage: '23_690x.webp'},
    {slideSubTitle: '100% genuine Products', slideTitle: 'Tasty & Healthy Organic Food', slideBtn: 'Shop Now', slideImage: '21_690x.webp'}
  ]


}
