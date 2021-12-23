import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage: String = '';
  isCross="false";
  itemArray:String[] = new Array(9).fill('empty')
  constructor(private toastr: ToastrService) {}
  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }
}
