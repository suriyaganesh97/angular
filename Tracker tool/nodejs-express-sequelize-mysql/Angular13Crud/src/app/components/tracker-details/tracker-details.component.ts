import { Component, Input, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tracker } from 'src/app/models/tracker.model';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-tracker-details',
  templateUrl: './tracker-details.component.html',
  styleUrls: ['./tracker-details.component.css']
})
export class TrackerDetailsComponent implements OnInit {
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
  //createddate = 'test';
  message = '';
  constructor(
    private trackerService: TrackerService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTracker(this.route.snapshot.params["id"]);
    }
  }
  getTracker(id: string): void {
    
    // createddate = this.currentTracker.createdAt.substring(1,2) 
    this.trackerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTracker = data;
          // let createddate = this.currentTracker.createdAt;
          // if(typeof createddate==='string'){
          //   createddate  = createddate.substring(1,10);
          // }
          
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      username: this.currentTracker.username,
      userdescription: this.currentTracker.userdescription,
      userpublished: status,
      worktype: this.currentTracker.worktype,
      membername: this.currentTracker.membername,
      bankname: this.currentTracker.bankname,
      regionbank: this.currentTracker.regionbank,
      solution: this.currentTracker.solution,
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
    this.trackerService.update(this.currentTracker.id, this.currentTracker)
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