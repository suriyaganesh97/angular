import { Component, OnInit } from '@angular/core';
import { Tracker } from 'src/app/models/tracker.model';
import { TrackerService } from 'src/app/services/tracker.service';
import { Router } from '@angular/router';
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
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6];
  constructor(private trackerService: TrackerService,
    private router: Router) { }

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
  retrieveTrackers(): void {
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
  debugger;
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
cancelTitle(): void {
  this.page = 1;
  this.retrieveTrackers();
  this.username = '';
  this.refreshList();
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
