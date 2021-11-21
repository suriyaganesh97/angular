import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  server1=false;
  server2=true;
  isValid=true;
  unchanged=false;
  isredColor=false;
  step1='present';
  num1: any = 20;
  num2: any = 30;
  num3: any = 0;
  if (num1 > num2) {
    num3=num1;
  }
  else{
    num3=num2;
  }
}
