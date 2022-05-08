import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})


export class BetterHighlightDirective implements OnInit{
@HostBinding('style.backgroundColor') testBackgroundColor:string = 'green';
  constructor(private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
      // this.renderer.setStyle(this.elref.nativeElement,'background-color',"blue");
  }

  @HostListener('mouseenter') mousehoverover(){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color',"blue");
    this.testBackgroundColor='blue';
  }

  @HostListener('mouseleave') mouseleavingelement(){
    // this.renderer.setStyle(this.elref.nativeElement,'background-color',"red");
    this.testBackgroundColor='red';
  }

}
