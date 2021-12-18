import { Component } from '@angular/core';
import Arraywords from "../utils/words"
import country_names from "../utils/countries"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  
  words="";
  limit=10;
  co_data = country_names;
  random_no=0;
  random_country='';

  slide_func(newLimit :number){
    this.limit = newLimit;
  }

  generate(){
    this.words = Arraywords.slice(0,this.limit).join(" ");
  }
  generate_country(){
    this.random_no = Math.round(Math.random()*10);
    this.random_country = this.co_data[this.random_no];
  }

}
