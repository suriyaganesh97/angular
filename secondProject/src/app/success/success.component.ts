import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  num1=10;
  img_src = "../../assets/iphone6.png";
  text1 = "no servers";
  serverName="";
  newServer="";
  constructor() { }

  ngOnInit(): void {

  }
  whenClicked(){
      this.text1="server created"
  }
  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
}
