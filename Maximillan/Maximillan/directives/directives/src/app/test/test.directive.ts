import { Directive, ElementRef, OnInit } from "@angular/core";
@Directive({
    selector:'[apptest]'
})
export class TestDirective implements OnInit {
    constructor( private elementRef: ElementRef){  
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor="green";
    }
}
