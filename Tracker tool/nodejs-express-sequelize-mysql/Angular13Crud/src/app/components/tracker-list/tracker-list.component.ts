import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {
  trackers?: Tracker[];
  // trackers: Tracker[] = Tracker;
  currentTracker: Tracker = {};
  
  currentIndex = -1;
  username = '';
  title = '';
  userpublished = false;
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6];
  priorityParamType='';
  solutionParamType='';
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
    // solutiontype: ['']
  })
  constructor(private trackerService: TrackerService,
    private router: Router,public fb: FormBuilder) { }

  ngOnInit(): void {
    this.retrieveTrackers();
    
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    
    let params: any = {};
    if (searchTitle) {
      params[`username`] = searchTitle;
    }
    if (page) {
      //params[`page`] = page ;
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }

  getRequestParamsByCompleted(userpublished:boolean,page: number, pageSize: number): any {
    
    let params: any = {};
    
    if (page) {
      //params[`page`] = page ;
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    if(userpublished){
      params[`userpublished`] = userpublished;
    }
    return params;
  }

  getRequestParamsBypriority(filterBypriorityTitle: string, page: number, pageSize: number): any {
     
    let params: any = {};
    if (filterBypriorityTitle) {
      params[`prioritytype`] = filterBypriorityTitle;
    }
    if (page) {
      //params[`page`] = page ;
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  getRequestParamsBySolution(filterBySolutionTitle: string, page: number, pageSize: number): any {
    let params: any = {};
    if (filterBySolutionTitle) {
      params[`solution`] = filterBySolutionTitle;
    }
    if (page) {
      //params[`page`] = page ;
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
  }
  retrieveTrackers(): void {
    // debugger;
    const params = this.getRequestParams(this.username, this.page, this.pageSize);
    this.trackerService.getAll(params)
    .subscribe(
      response => {
        const { trackers, totalItems } = response;
        this.trackers = trackers;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  retrieveCompletedTrackers(): void {
    // debugger;
    // alert("inside completed tracker func");
    const paramsforCompletedTrackers = this.getRequestParamsByCompleted( this.userpublished,this.page, this.pageSize);
    this.trackerService.getAllCompletedTracker(paramsforCompletedTrackers)
    .subscribe(
      response => {
        const { trackers, totalItems } = response;
        this.trackers = trackers;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }



  retrieveTrackersByPriority(): void {
    if(this.prioritytypeform.value["prioritytype"]){
      this.priorityParamType = this.prioritytypeform.value["prioritytype"];
    }
    else{
      this.priorityParamType = "High";
    }

    const paramsBypriority = this.getRequestParamsBypriority(this.priorityParamType, this.page, this.pageSize);
    this.trackerService.getAllBypriority(paramsBypriority)
    .subscribe(
      response => {
        const { trackers, totalItems } = response;
        this.trackers = trackers;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
  retrieveTrackersBySolution(): void {
    if(this.solutiontypeform.value["solutiontype"]){
      this.solutionParamType = this.solutiontypeform.value["solutiontype"];
    }
    else{
      this.solutionParamType = "Finflowz";
    }
    
    const paramsBySolution = this.getRequestParamsBySolution(this.solutionParamType, this.page, this.pageSize);
    debugger;
    this.trackerService.getAllBySolution(paramsBySolution)
    .subscribe(
      response => {
        const { trackers, totalItems } = response;
        this.trackers = trackers;
        this.count = totalItems;
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
refreshList(): void {
  this.retrieveTrackers();
  this.currentTracker = {};
  this.currentIndex = -1;
}
setActiveTracker(tracker: Tracker, index: number): void {
  this.currentTracker = tracker;
  this.currentIndex = index;
}
removeAllTrackers(): void {
  this.trackerService.deleteAll()
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
}

handlePageChange(event: number): void {
 
    this.page = event;
    this.refreshList();
    this.retrieveTrackers();
  }
  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveTrackers();
  }
  
  
searchTitle(): void {
 
  this.page = 1;
    this.retrieveTrackers();
}
searchByPriority(): void {
   
  this.page = 1;
    this.retrieveTrackersByPriority();
}
cancelTitle(): void {
  this.page = 1;
  this.retrieveTrackers();
  this.username = '';
  this.refreshList();
}

searchBySolution(): void {
  this.page = 1;
    this.retrieveTrackersBySolution();
}

deleteTracker(): void {
  this.trackerService.delete(this.currentTracker.id)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
        // this.router.navigate(['/trackers']);
      },
      error: (e) => console.error(e)
    });
}
}
