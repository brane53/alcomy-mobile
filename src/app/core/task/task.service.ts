import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Task, User } from '../../models/models';

@Injectable()
export class TaskService {

  private tasks$$: BehaviorSubject<Task[]>;
  tasks$: Observable<Task[]>;
  

  constructor(private http: HttpClient) { }

  // POST /tasks?
  public addTask(task, params?: {completionType: string}) {
    let queryParams = new HttpParams().set('completionType', params.completionType);
    
    this.http.post('/api/tasks', {params: queryParams})
  }

  public getTasks(query: Object) {
    // Call out to a REST Api
    // Push the value that comes back to this.tasks
    this.http.get('/tasks')
    .subscribe(
      (tasks: Task[]) => {
        this.tasks$$.next(tasks);
      },
      err => {
        console.error(`Tasks were not returned. TaskService.getTasks()`);
      }
    );
  }

  public toggleTaskComplete(taskId: number) {
    
  }

  // DELETE /tasks/:id
  public deleteTask(taskId: number) {
    
  }
}
