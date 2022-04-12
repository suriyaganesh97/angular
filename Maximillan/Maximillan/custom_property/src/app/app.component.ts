import { Component, Input } from '@angular/core';
import { TestComponent } from './test/test.component';
import { NewComponent } from './new/new.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messagelist = [{  
    id: 1,  
    msg: 'Test two notification'  
}, {  
    id: 2,  
    msg: 'Test three notification'  
}, ];  
new_title = "suriya";
  constructor() {
    testComponent: TestComponent

   }
  
  
}
