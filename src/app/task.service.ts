import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';

/*TODO: add error handler*/

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'https://stickytsk-api.herokuapp.com/tasks';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions)
  }

  deleteTask(id: string): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task._id}`;
    return this.http.put<Task>(url, task, this.httpOptions);
  }
}
