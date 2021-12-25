
import { Component, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'drumKit';
  key="";
  playtom1(){
    let tom1 = new Audio();
    tom1.src = "../assets/tom-1.mp3";
    tom1.load();
    tom1.play();
  }
  playtom2(){
    let tom2 = new Audio();
    tom2.src = "../assets/tom-2.mp3";
    tom2.load();
    tom2.play();
  }
  playtom3(){
    let tom3 = new Audio();
    tom3.src = "../assets/tom-3.mp3";
    tom3.load();
    tom3.play();
  }
  playtom4(){
    let tom4 = new Audio();
    tom4.src = "../assets/tom-4.mp3";
    tom4.load();
    tom4.play();
  }
  playsnare(){
    let snare = new Audio();
    snare.src = "../assets/snare.mp3";
    snare.load();
    snare.play();
  }
  playcrash(){
    let crash = new Audio();
    crash.src = "../assets/crash.mp3";
    crash.load();
    crash.play();
  }
  playkickbass(){
    let kickbass = new Audio();
    kickbass.src = "../assets/kick-bass.mp3";
    kickbass.load();
    kickbass.play();
  }
  
  globalListenFunc: Function;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.globalListenFunc = this.renderer.listen('document', 'keydown.w', w => {
      this.playtom1();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.a', a => {
      this.playtom2();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.s', s => {
      this.playtom3();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.d', d => {
      this.playtom4();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.j', j => {
      this.playsnare();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.k', k => {
      this.playcrash();
    });
    this.globalListenFunc = this.renderer.listen('document', 'keydown.l', l => {
      this.playkickbass();
    });
  }

  ngOnDestroy() {
    // remove listener
    this.globalListenFunc();
  }
}
