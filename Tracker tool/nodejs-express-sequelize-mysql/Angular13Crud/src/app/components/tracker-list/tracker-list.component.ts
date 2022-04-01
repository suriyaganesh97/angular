import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';
@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerListComponent implements OnInit {
  trackers?: Tracker[];
  currentTracker: Tracker = {};
  currentIndex = -1;
  username = '';
  constructor(private trackerService: TrackerService) { }

  ngOnInit(): void {
    this.retrieveTrackers();
  }
  retrieveTrackers(): void {
    this.trackerService.getAll()
      .subscribe({
        next: (data) => {
          this.trackers = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });      
}
refreshList(): void {
  this.retrieveTrackers();
  this.currentTracker = {};
  this.currentIndex = -1;
}
setActiveTracker(tutorial: Tracker, index: number): void {
  this.currentTracker = tutorial;
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
searchTitle(): void {
  this.currentTracker = {};
  this.currentIndex = -1;
  this.trackerService.findByTitle(this.username)
    .subscribe({
      next: (data) => {
        this.trackers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}
cancelTitle(): void {
  this.currentTracker = {};
  this.currentIndex = -1;
  this.username = '';
  this.trackerService.findByTitle(this.username)
    .subscribe({
      next: (data) => {
        this.trackers = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
}
}
