import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simonGame';
  max_limit=3;
  min_limit=0;
  randomNumber=0;
  buttonColours = ["red", "blue", "green", "yellow"];
  randomChosenColour="";
  gamePattern=[];
  nextSequence()
  { 
    this.randomNumber = this.min_limit + Math.floor(Math.random()*(this.max_limit-this.min_limit+1));
    this.randomChosenColour = this.buttonColours[this.randomNumber];
  }
}
