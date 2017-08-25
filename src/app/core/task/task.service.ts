import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Task, User } from '../../models/models';

@Injectable()
export class TaskService {

  private tasks: BehaviorSubject<Task[]>;
  tasks$: Observable<User>;

  constructor(private http: Http) { }

  // POST /tasks?
  public addTask(task) {
    // this.http.post()
  }

  public getTasks(): Observable<any> {
    return this.http.get('/tasks');
  }

  public toggleTaskComplete(taskId: number) {
    
  }

  // DELETE /tasks/:id
  public deleteTask(taskId: number) {

  }
}
