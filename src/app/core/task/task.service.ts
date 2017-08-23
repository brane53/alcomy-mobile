import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../models/models';

@Injectable()
export class TaskService {

  tasks$: BehaviorSubject<Task[]>;

  constructor(private http: Http) { }

  // POST /tasks?
  public addTask(task) {
    // this.http.post()
  }

  // DELETE /tasks/:id
  public deleteTask(taskId: number) {

  }

  public getTasks(): Observable<any>{
    return this.http.get('/tasks');
  }

}
