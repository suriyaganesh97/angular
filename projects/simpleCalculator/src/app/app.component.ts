import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simpleCalculator';
  num1:number=0;
  num2:number=0;
  num3:number=0;
  operation:string="";
  displayResult:boolean=false;
  
  addnum(){
    this.num3 = this.num1 + this.num2; 
    this.operation="addition";
    this.displayResult=true;
    
  }

  subnum(){
    this.num3 = this.num1 - this.num2;
    this.num3=Math.abs(this.num3);
    this.operation="subtraction";
    this.displayResult=true;
  }

  mulnum(){
    this.num3 = this.num1 * this.num2;
    this.operation="multiplication";
    this.displayResult=true;
  }
  divnum(){
    this.num3 = this.num1 / this.num2;
    this.operation="division";
    this.displayResult=true;
  }
}
