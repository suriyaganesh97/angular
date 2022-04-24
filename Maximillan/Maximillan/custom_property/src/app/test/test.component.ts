import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() messagelist: any[]; 
  @Input() new_title:string;
  @ContentChild('paracontent',{static:true})paragraphContent:ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log("inside ngoninit "+this.paragraphContent.nativeElement.textContent);
  }
  ngAfterContentInit() {
    console.log("inside contentinit "+this.paragraphContent.nativeElement.textContent);
  }

}
