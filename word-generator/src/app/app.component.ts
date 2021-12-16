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
  new_word="";
}
