import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuIconXbar:boolean = true;
  menuBars: boolean = false;
  openMenu(){
    this.menuBars =! this.menuBars;
    this.menuIconXbar =! this.menuIconXbar;
  }
}
