import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.nav-bar') navBar: boolean;

  @HostListener("window:scroll") OnScroll(){
      console.log(window.scrollY);
      if(window.screenY >= 50){
        this.navBar=true;
      }else{
        this.navBar=false;
      }
  }

}
