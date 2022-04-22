import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.css']
})
export class AddTrackerComponent implements OnInit {
  prioritytypeVariable: any = ['High','Medium','Low'];
  priorityvariable='';
  
  temp_priority_variable='';
  prioritytypeform = this.fb.group({
    prioritytype: ''
  })
  solutiontypeVariable: any = ['Finflowz', 'FinCluez', 'Oracle Consulting'];
  solutionvariable='';
  temp_solution_variable='';
  solutiontypeform = this.fb.group({
    solutiontype: ''
    // solutiontype: ['']
  })
  tracker: Tracker = {
    username: '',
    userdescription: '',
    userpublished: false,
    createdAt: '',
    updatedAt: '',
    prioritytype:'',
    worktype :'', 
    membername: '',
    bankname: '', 
    regionbank: '', 
    solution: '', 
    comment:''
  };
  submitted = false;
  constructor(private trackerService: TrackerService,public fb: FormBuilder) { }


  ngOnInit(): void {
  }
  saveTracker(): void {
    this.submitted = false;
    debugger;
    this.temp_priority_variable = this.prioritytypeform.value["prioritytype"];
    this.temp_solution_variable = this.solutiontypeform.value["solutiontype"];
    
    const data = {
      username: this.tracker.username,
      userdescription: this.tracker.userdescription,
      prioritytype: this.temp_priority_variable,
      // prioritytype: this.tracker.prioritytype,
      worktype: this.tracker.worktype,
      membername: this.tracker.membername,
      bankname: this.tracker.bankname,
      regionbank: this.tracker.regionbank,
      solution: this.temp_solution_variable,
      comment: this.tracker.comment
    };
    this.trackerService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newTracker(): void {
    
    this.tracker = {
      username: '',
      userdescription: '',
      userpublished: false,
      prioritytype:'',
      worktype:'',
      membername:'',
      bankname: '',
      regionbank: '',
      solution: '',
      comment: ''
    };
  }
  
}
