import { Component, Input, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tracker } from 'src/app/models/tracker.model';
import { FormBuilder,FormControl } from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-tracker-details',
  templateUrl: './tracker-details.component.html',
  styleUrls: ['./tracker-details.component.css']
})
export class TrackerDetailsComponent implements OnInit {
  prioritytypeVariable: any = ['High', 'Medium', 'Low'];
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
  name_swap_variable='';
  nametypeform = this.fb.group({
    nametype: ''
    
  })
  temp_check_for_name ='' ;
  worktypeVariable: any = ['RFP', 'Technical Proposal', 'Development'];
  workvariable='';
  temp_work_variable='';
  worktypeform = this.fb.group({
    worktype: ''
  })
  temp_check_for_work='';
  work_swap_variable='';
  temp_check_for_regionbank ='' ;
  region_swap_variable ='';

  member = new FormControl();
  memberList: string[] = ['Akshata','Albert','Amlan','Anand','Bathri','Chandramouli','Mahesh','Manish','Prem','Priyanka','Ramanath','Rohan','Sachin','Sriram','Suriya','Vinith'];
  temp_member_variable='';
  member_name_array:string[]=[''];
  name_as_string:string='';
  temp_check_for_membername:string='';
  new_member_array:string[]=[''];

  currentTrackerValue ={
    username: '',
    userdescription: '',
    userpublished: false,
    createdAt: '',
    updatedAt: '',
    prioritytype:'',
    worktype: '', 
    membername: '',
    bankname: '', 
    regionbank: '', 
    solution: '', 
    comment:''
  }
  @Input() viewMode = false;
  
  @Input() currentTracker: Tracker = {
    
    username: '',
    userdescription: '',
    userpublished: false,
    createdAt: '',
    updatedAt: '',
    prioritytype:'',
    worktype: '', 
    membername: '',
    bankname: '', 
    regionbank: '', 
    solution: '', 
    comment:''
  };
  
  message = '';
  constructor(
    private trackerService: TrackerService,
    private route: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder) { }
  ngOnInit(): void {
    
    if (!this.viewMode) {
      this.message = '';
      this.getTracker(this.route.snapshot.params["id"]);
    }
    
  }
  ListArrange(currentTrackerValue:any){
    //  reordering the array so that first element in dropdown is the already
    // existing option selected in backend
    //below two examples are hardcoded for priority and solution type
    
    if(currentTrackerValue.prioritytype =='Medium'){
      this.prioritytypeVariable = ['Medium','High','Low'];
    }
    if(currentTrackerValue.prioritytype =='Low'){
      this.prioritytypeVariable = ['Low','Medium','High'];
    }
    if(currentTrackerValue.solution =='FinCluez'){
      this.solutiontypeVariable = ['FinCluez','Finflowz','Oracle Consulting'];
    }
    if(currentTrackerValue.solution =='Oracle Consulting'){
      this.solutiontypeVariable = ['Oracle Consulting','FinCluez','Finflowz'];
    }
    //reordering the regionbank array with logic
    if(currentTrackerValue.regionbank){
      this.temp_check_for_regionbank = currentTrackerValue.regionbank;
      for(let i=0;i<this.regiontypeVariable.length;i++){
        if(this.temp_check_for_regionbank == this.regiontypeVariable[i]){
          this.region_swap_variable = this.regiontypeVariable[0];
          this.regiontypeVariable[0] = this.regiontypeVariable[i];
          this.regiontypeVariable[i] = this.region_swap_variable;
        }
      }
    }
    //reordering the username array with logic
    if(currentTrackerValue.username){
      this.temp_check_for_name = currentTrackerValue.username;
      for(let i=0;i<this.nametypeVariable.length;i++){
        if(this.temp_check_for_name == this.nametypeVariable[i]){
          this.name_swap_variable = this.nametypeVariable[0];
          this.nametypeVariable[0] = this.nametypeVariable[i];
          this.nametypeVariable[i] = this.name_swap_variable;
        }
      }
    }
//reordering the worktype array with logic
    if(currentTrackerValue.worktype){
      this.temp_check_for_work = currentTrackerValue.worktype;
      for(let i=0;i<this.worktypeVariable.length;i++){
        if(this.temp_check_for_work == this.worktypeVariable[i]){
          this.work_swap_variable = this.worktypeVariable[0];
          this.worktypeVariable[0] = this.worktypeVariable[i];
          this.worktypeVariable[i] = this.work_swap_variable;
        }
      }
    }
    

    if(currentTrackerValue.membername){
      this.temp_check_for_membername = currentTrackerValue.membername;
      this.member_name_array = this.temp_check_for_membername.split(",");
      this.member.patchValue(this.member_name_array);
        } 
  }
  reAssigningmemberNameString(){
    // before updating tracker through update published or updatetracker
    // we call this method and change the 
    // current members selected to string and store it in DB
    this.new_member_array = this.member.value;
    if(this.new_member_array){
      this.name_as_string = this.new_member_array.toString();
      debugger;
    }
  }
  getTracker(id: string): void {
    
    this.trackerService.get(id)
      .subscribe({
        next: (data) => {
          
          this.currentTracker = data;
          this.ListArrange(this.currentTracker);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      console.log(this.currentTracker);
      
  }
  updatePublished(status: boolean): void {
    this.reAssigningmemberNameString();
    if(this.prioritytypeform.value["prioritytype"]){
      this.temp_priority_variable = this.prioritytypeform.value["prioritytype"];
    }
    else{
      this.temp_priority_variable = this.currentTracker.prioritytype;
    }

    if(this.solutiontypeform.value["solutiontype"]){
      this.temp_solution_variable = this.solutiontypeform.value["solutiontype"];
    }
    else{
      this.temp_solution_variable = this.currentTracker.solution;
    }
    
    if(this.regiontypeform.value["regiontype"]){
      this.temp_region_variable = this.regiontypeform.value["regiontype"];
    }
    else{
      this.temp_region_variable = this.currentTracker.regionbank;
    }

    if(this.nametypeform.value["nametype"]){
      this.temp_name_variable = this.nametypeform.value["nametype"];
    }
    else{
      this.temp_name_variable = this.currentTracker.username;
    }
    if(!this.temp_name_variable){
      this.temp_name_variable=this.nametypeVariable[0];
    }

    if(this.worktypeform.value["worktype"]){
      this.temp_work_variable = this.worktypeform.value["worktype"];
    }
    else{
      this.temp_work_variable = this.currentTracker.worktype;
    }
    const data = {
      username: this.temp_name_variable,
      userdescription: this.currentTracker.userdescription,
      userpublished: status,
      prioritytype: this.temp_priority_variable,
      // prioritytype: this.currentTracker.prioritytype,
      worktype: this.temp_work_variable,
      membername: this.name_as_string,
      bankname: this.currentTracker.bankname,
      regionbank: this.temp_region_variable,
      solution: this.temp_solution_variable,
      // solution: this.currentTracker.solution,
      comment: this.currentTracker.comment
    };
    this.message = '';
    this.trackerService.update(this.currentTracker.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentTracker.userpublished = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateTracker(): void {
    this.message = '';
    this.reAssigningmemberNameString();
    if(this.prioritytypeform.value["prioritytype"]){
      this.temp_priority_variable = this.prioritytypeform.value["prioritytype"];
    }
    else{
      this.temp_priority_variable = this.currentTracker.prioritytype;
    }

    if(this.solutiontypeform.value["solutiontype"]){
      this.temp_solution_variable = this.solutiontypeform.value["solutiontype"];
    }
    else{
      this.temp_solution_variable = this.currentTracker.solution;
    }
    
    if(this.regiontypeform.value["regiontype"]){
      this.temp_region_variable = this.regiontypeform.value["regiontype"];
    }
    else{
      this.temp_region_variable = this.currentTracker.regionbank;
    }

    if(this.nametypeform.value["nametype"]){
      this.temp_name_variable = this.nametypeform.value["nametype"];
    }
    else{
      this.temp_name_variable = this.currentTracker.username;
    }

    if(this.worktypeform.value["worktype"]){
      this.temp_work_variable = this.worktypeform.value["worktype"];
    }
    else{
      this.temp_work_variable = this.currentTracker.worktype;
    }
    const data = {
      username: this.temp_name_variable,
      userdescription: this.currentTracker.userdescription,
      userpublished: status,
      // prioritytype: this.currentTracker.prioritytype,
      prioritytype: this.temp_priority_variable,
      worktype: this.temp_work_variable,
      membername: this.name_as_string,
      bankname: this.currentTracker.bankname,
      regionbank: this.temp_region_variable,
      solution: this.temp_solution_variable,
      comment: this.currentTracker.comment
    };
    this.trackerService.update(this.currentTracker.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tracker was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteTracker(): void {
    this.trackerService.delete(this.currentTracker.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/trackers']);
        },
        error: (e) => console.error(e)
      });
  }
  exportExcel() {
    // const workSheet = XLSX.utils.json_to_sheet(this.getTracker.data, {header:['dataprop1', 'dataprop2']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'filename.xlsx');
}
}