import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diceeGame';
  max_limit= 6;
  min_limit=1;
  winner="";
  
  randomNo1:number = this.min_limit + Math.floor(Math.random()*(this.max_limit-this.min_limit+1));
  img_path_1 = "../assets/dice"+this.randomNo1+".png";
  img_src_1 = this.img_path_1;

  randomNo2:number = this.min_limit + Math.floor(Math.random()*(this.max_limit-this.min_limit+1));
  img_path_2 = "../assets/dice"+this.randomNo2+".png";
  img_src_2 = this.img_path_2;
  //img_src = "../assets/dice6.png";
  //to show which winner wins or if draw in top where there is refresh me text
  if (this.randomNo1 > this.randomNo2)
  {
    this.winner="player1";
  }
  else if (randomNo1 === randomNo2)
  {
    winner="draw";
  }
  else{
    winner="player2";
  }
}
