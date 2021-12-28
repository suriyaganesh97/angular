import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'string';
  fName="";
  lName="";
  fullName="";
  nameInput=false;
  combineName(){
    this.fullName = this.fName.toUpperCase()+this.lName.toUpperCase();
    if (this.fullName.length>0)  //checking whether name is entered 
    {
      this.nameInput=true;
    }
  }
}
