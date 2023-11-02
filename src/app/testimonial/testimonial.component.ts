import { Component, Input } from '@angular/core';
import { Testimonial } from '../interfaces/testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
    @Input() testiData: Testimonial;
}
