import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  // POST /tasks? 
  public addTask(task) {
    // this.http.post()
  }

}
