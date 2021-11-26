import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count = 0;
  increaseCount(){
    if(this.count<10)
    {
      this.count = this.count + 1;
    }
    
  }
  decreaseCount(){
    if(this.count>0){
      this.count = this.count - 1;
    }
    
  }
  resetCount(){
    this.count=0;
  }
}
