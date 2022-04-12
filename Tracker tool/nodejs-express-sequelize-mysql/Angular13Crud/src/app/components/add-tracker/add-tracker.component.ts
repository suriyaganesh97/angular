import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';

@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.css']
})
export class AddTrackerComponent implements OnInit {
  tracker: Tracker = {
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
  submitted = false;
  constructor(private trackerService: TrackerService) { }

  ngOnInit(): void {
  }
  saveTracker(): void {
    const data = {
      username: this.tracker.username,
      userdescription: this.tracker.userdescription,
      prioritytype: this.tracker.prioritytype,
      worktype: this.tracker.worktype,
      membername: this.tracker.membername,
      bankname: this.tracker.bankname,
      regionbank: this.tracker.regionbank,
      solution: this.tracker.solution,
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
    this.submitted = false;
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
