import { Component, Input, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tracker } from 'src/app/models/tracker.model';
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
    userpublished: false
  };
  
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
    this.trackerService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTracker = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      username: this.currentTracker.username,
      userdescription: this.currentTracker.userdescription,
      userpublished: status
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
}