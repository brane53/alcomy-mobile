import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  // POST /tasks? 
  public addTask(task) {
    // this.http.post()
  }

  public getTasks(): Observable<any>{
    return this.http.get('/tasks');
  }

}
