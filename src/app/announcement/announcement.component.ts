import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  countDownDate = new Date("novembar 24, 2023 15:37:25").getTime();
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
  });

  postVisibility: boolean = false;

  onToggleBtn(){
    this.postVisibility = !this.postVisibility;
  }
}
