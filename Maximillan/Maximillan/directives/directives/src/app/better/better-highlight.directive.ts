import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elref:ElementRef, private renderer:Renderer2) { }
  ngOnInit(): void {
      this.renderer.setStyle(this.elref.nativeElement,'background-color',"blue");
  }

}
