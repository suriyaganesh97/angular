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
}
