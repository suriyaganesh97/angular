import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() messagelist: any[]; 
  @Input() new_title:string;
  constructor() { }

  ngOnInit(): void {
  }

}
