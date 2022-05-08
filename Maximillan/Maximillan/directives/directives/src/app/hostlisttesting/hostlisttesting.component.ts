import { Component, OnInit,Directive,HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlisttesting',
  templateUrl: './hostlisttesting.component.html',
  styleUrls: ['./hostlisttesting.component.css']
})

// @Directive({selector: 'button[counting]'})
// class CountClicks {
//   numberOfClicks = 0;

//   @HostListener('click', ['$event.target'])
//   onClick(btn) {
//     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
//   }
// }

// @Component({
//   selector: 'app',
//   template: '<button counting>Increment</button>',
// })
export class HostlisttestingComponent implements OnInit {
  checkcondition:boolean =true;
  
  constructor() { 
    if(!this.checkcondition){
      console.log(this.checkcondition);
    }
    else{
      console.log(!this.checkcondition);
    }
  }

  ngOnInit(): void {
  }

}
