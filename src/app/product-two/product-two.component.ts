import { Component, Input } from '@angular/core';
import { ProductTwo } from '../interfaces/product-two';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.scss']
})
export class ProductTwoComponent {
  @Input() cardData: ProductTwo;
}
