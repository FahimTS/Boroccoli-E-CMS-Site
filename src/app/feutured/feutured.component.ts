import { Component, Input } from '@angular/core';
import { Feutured } from '../interfaces/feutured';

@Component({
  selector: 'app-feutured',
  templateUrl: './feutured.component.html',
  styleUrls: ['./feutured.component.scss']
})
export class FeuturedComponent {

  @Input() cardData: Feutured;

}
