import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
      // this.renderer.setStyle(this.elref.nativeElement,'background-color',"blue");
  }

  @HostListener('mouseenter') mousehoverover(){
    this.renderer.setStyle(this.elref.nativeElement,'background-color',"blue");
  }

  @HostListener('mouseleave') mouseleavingelement(){
    this.renderer.setStyle(this.elref.nativeElement,'background-color',"red");
  }

}
