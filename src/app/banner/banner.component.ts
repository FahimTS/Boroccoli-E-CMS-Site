import { Component } from '@angular/core';
import { Banner } from '../interfaces/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  banner: Banner = {
    imageOne: '../../assets/img/13_470x.png',
    imageTwo: '../../assets/img/14_570x.webp',
    imageThree: '../../assets/img/15_570x.webp'
  }

  banners: Banner[] = [
    {
      imageOne: '../../assets/img/13_470x.png',
      imageTwo: '../../assets/img/14_570x.webp',
      imageThree: '../../assets/img/15_570x.webp'
    }
  ]
}
