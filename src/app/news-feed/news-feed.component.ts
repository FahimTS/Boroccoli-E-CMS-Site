import { Component, Input } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent {

  @Input() blogData: Blog;
  
}
