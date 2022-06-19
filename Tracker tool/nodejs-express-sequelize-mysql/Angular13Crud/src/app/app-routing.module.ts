import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerListComponent } from './components/tracker-list/tracker-list.component';
import { TrackerDetailsComponent } from './components/tracker-details/tracker-details.component';
import { AddTrackerComponent } from './components/add-tracker/add-tracker.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {APP_BASE_HREF} from '@angular/common';
const routes: Routes = [
  // {path:'', component: AppComponent},
  { path: '', redirectTo: 'trackers', pathMatch: 'full' },
  { path: 'trackers', component: TrackerListComponent },
  { path: 'trackers/:id', component: TrackerDetailsComponent },
  { path: 'add', component: AddTrackerComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppRoutingModule { }
