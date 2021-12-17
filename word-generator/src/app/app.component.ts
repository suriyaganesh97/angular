import { Component } from '@angular/core';
import Arraywords from "../utils/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = Arraywords;
  word="";
  limit=10;

  slide_func(newLimit :number){
    this.limit = newLimit;
  }

  // new_number=0;
  
  // When_clicked(new_number: number)
  // {
  //   this.new_number = new_number;
  // }
}
