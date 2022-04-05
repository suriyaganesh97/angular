import { Component, Input } from '@angular/core';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMsgToChild1 ="suriya";
  constructor() {
    testComponent: TestComponent

   }
  
  
}
