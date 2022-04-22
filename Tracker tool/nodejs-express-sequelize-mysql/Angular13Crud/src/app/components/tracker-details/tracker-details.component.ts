import { Component, Input, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tracker } from 'src/app/models/tracker.model';
import { FormBuilder } from "@angular/forms";
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
      // debugger;
  }
  updatePublished(status: boolean): void {
    // debugger;
    this.temp_priority_variable = this.prioritytypeform.value["prioritytype"];
    this.temp_solution_variable = this.solutiontypeform.value["solutiontype"];
    const data = {
      username: this.currentTracker.username,
      userdescription: this.currentTracker.userdescription,
      userpublished: status,
      prioritytype: this.temp_priority_variable,
      // prioritytype: this.currentTracker.prioritytype,
      worktype: this.currentTracker.worktype,
      membername: this.currentTracker.membername,
      bankname: this.currentTracker.bankname,
      regionbank: this.currentTracker.regionbank,
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
    debugger;
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
    
    const data = {
      username: this.currentTracker.username,
      userdescription: this.currentTracker.userdescription,
      userpublished: status,
      // prioritytype: this.currentTracker.prioritytype,
      prioritytype: this.temp_priority_variable,
      worktype: this.currentTracker.worktype,
      membername: this.currentTracker.membername,
      bankname: this.currentTracker.bankname,
      regionbank: this.currentTracker.regionbank,
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