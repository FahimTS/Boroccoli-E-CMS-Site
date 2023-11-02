import { Component } from '@angular/core';

@Component({
  selector: 'app-combo-package',
  templateUrl: './combo-package.component.html',
  styleUrls: ['./combo-package.component.scss']
})
export class ComboPackageComponent{


    countDownDate = new Date("novembar 24, 2025 15:37:25").getTime();
    demo: any;
    demoOne: any;
    demoTwo: any;
    demoThree: any;
    x = setInterval(()=>{
      var now = new Date().getTime();
      var distance = this.countDownDate - now;
      var days = Math.floor(distance/(1000*60*60*24));
      var hourse = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      var seconds = Math.floor((distance % (1000*60)) / 1000);
      this.demo = days + ""
      this.demoOne = hourse + ""
      this.demoTwo = minutes + ""
      this.demoThree = seconds + ""
      if(distance<0){
        clearInterval(this.x);
        this.demo = "Expired";
      }
    })

}
