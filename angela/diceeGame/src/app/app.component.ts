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
  winner="Play the  game";
  randomNo1=0;
  randomNo2=0;
  img_path_1="";
  img_src_1="../assets/dice6.png";
  img_path_2="";
  img_src_2="../assets/dice6.png";
  
  generaterandomnos(){
    this.randomNo1 = this.min_limit + Math.floor(Math.random()*(this.max_limit-this.min_limit+1));
    this.img_path_1 = "../assets/dice"+this.randomNo1+".png";
    this.img_src_1 = this.img_path_1;
  
    this.randomNo2 = this.min_limit + Math.floor(Math.random()*(this.max_limit-this.min_limit+1));
    this.img_path_2 = "../assets/dice"+this.randomNo2+".png";
    this.img_src_2 = this.img_path_2;
  }
  
  //img_src = "../assets/dice6.png";
  //to show which winner wins or if draw in top where there is refresh me text
  findingWinner(){
    this.generaterandomnos();
    if (this.randomNo1 > this.randomNo2)
    {
      this.winner="player1 wins";
    }
    else if (this.randomNo1 === this.randomNo2)
    {
      this.winner="draw";
    }
    else{
      this.winner="player2 wins";
    }
  }
  
}
