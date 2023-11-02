import { Component, Input } from '@angular/core';
import { FeaturedProduct } from '../interfaces/featured-product';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent {
  
  @Input() cardData: FeaturedProduct;

}
