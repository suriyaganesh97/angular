import { Component, Input, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';
import { FormBuilder,FormControl } from "@angular/forms";

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
    
  })
  regiontypeVariable: any = ['North America','South America','JAPAC','India','Africa','Middle East','CAS','Europe'];
  regionvariable='';
  temp_region_variable='';
  
  regiontypeform = this.fb.group({
    regiontype: ''
    
  })
  nametypeVariable: any = ['Akshata','Albert','Amlan','Anand','Bathri','Chandramouli','Mahesh','Manish','Prem','Priyanka','Ramanath','Rohan','Sachin','Sriram','Suriya','Vinith'];
  namevariable='';
  temp_name_variable='';
  
  nametypeform = this.fb.group({
    nametype: ''
    
  })
  worktypeVariable: any = ['RFP', 'Technical Proposal', 'Development'];
  workvariable='';
  temp_work_variable='';
  
  worktypeform = this.fb.group({
    worktype: ''
    
  })

  member = new FormControl();
  memberList: string[] = ['Akshata','Albert','Amlan','Anand','Bathri','Chandramouli','Mahesh','Manish','Prem','Priyanka','Ramanath','Rohan','Sachin','Sriram','Suriya','Vinith'];
  temp_member_variable='';
  member_name_array:string[]=[''];
  name_as_string:string='';
  // @Input() toppings:FormControl;

 
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
    // console.log(this.memberList);
    console.log(this.member);
    console.log(this.member.value);
    this.member_name_array=this.member.value;
    if(this.member_name_array){
      this.name_as_string = this.member_name_array.toString();
    }

    
    console.log(this.name_as_string);
    // for(let i=0;i<this.member_name_array.length;i++){
    //   this.name_as_string = this.member_name_array[i];
    // }



    this.temp_priority_variable = this.prioritytypeform.value["prioritytype"];
    this.temp_solution_variable = this.solutiontypeform.value["solutiontype"];
    this.temp_region_variable = this.regiontypeform.value["regiontype"];
    this.temp_name_variable = this.nametypeform.value["nametype"];
    this.temp_work_variable = this.worktypeform.value["worktype"];
    //if no value is selected in template below logic will automatically assign first element of array to the form value
    if(!this.temp_name_variable){
      this.temp_name_variable=this.nametypeVariable[0];
    }
    if(!this.temp_priority_variable){
      this.temp_priority_variable=this.prioritytypeVariable[0];
    }
    if(!this.temp_solution_variable){
      this.temp_solution_variable=this.solutiontypeVariable[0];
    }
    if(!this.temp_region_variable){
      this.temp_region_variable=this.regiontypeVariable[0];
    }
    if(!this.temp_work_variable){
      this.temp_work_variable=this.worktypeVariable[0];
    }
    // this.temp_member_variable = this.memberList
    const data = {
      username: this.temp_name_variable,
      userdescription: this.tracker.userdescription,
      prioritytype: this.temp_priority_variable,
      // prioritytype: this.tracker.prioritytype,
      worktype:  this.temp_work_variable,
      membername: this.name_as_string,
      bankname: this.tracker.bankname,
      regionbank: this.temp_region_variable,
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
