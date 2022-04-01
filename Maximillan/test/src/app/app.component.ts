import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  num1:number=0;
  num2:number=0;
  num3:number=0;
  addNumbers(){
    
    this.num3=this.num1+this.num2
  }
}
