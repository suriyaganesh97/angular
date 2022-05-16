import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tracker } from '../models/tracker.model';
const baseUrl = 'http://localhost:8080/api/tracker';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {
  constructor(private http: HttpClient) { }
  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }
  getAllCompletedTracker(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/published`, { params });
  }
  // getAll(params:any): Observable<Tracker[]> {
  //   return this.http.get<Tracker[]>(baseUrl, { params });
  // }
  getAllBypriority(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/filterwithpriority`, { params });
  }
  getAllBySolution(params: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/filterwithsolution`, { params });
  }
  get(id: any): Observable<Tracker> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByTitle(username: any): Observable<Tracker[]> {
    return this.http.get<Tracker[]>(`${baseUrl}?username=${username}`);
  }
}

