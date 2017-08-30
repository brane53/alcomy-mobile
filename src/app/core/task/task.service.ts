import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Task, User } from '../../models/models';

@Injectable()
export class TaskService {

  private tasks: BehaviorSubject<Task[]>;
  tasks$: Observable<Task[]>;
  

  constructor(private http: Http) { }

  // POST /tasks?
  public addTask(task) {
    // this.http.post()
  }

  public getTasks(query: Object) {
    // Call out to a REST Api
    // Push the value that comes back to this.tasks
    this.http.get('/tasks')
    .map(res => {
      return res.json();
    })
    .subscribe(
    tasks => {
      this.tasks.next(tasks);
    },
    err => {
      console.error(`Tasks were not returned. TaskService.getTasks()`);
    });
  }

  public toggleTaskComplete(taskId: number) {
    
  }

  // DELETE /tasks/:id
  public deleteTask(taskId: number) {
    
  }
}
