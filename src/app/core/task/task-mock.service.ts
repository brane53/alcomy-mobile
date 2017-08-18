import { Injectable } from '@angular/core';
import { Task } from '../../models/models';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TaskMockService {

  tasks: Task[] = [
    {
      id: '1',
      description: 'Do the laundry',
      isComplete: false,
      createdOn: moment('2017-8-16').format(),
      dueDate: '',
      createdBy: null,
      assignedTo: []
    }
  ];

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject(this.tasks);

  constructor() { }

  // POST /tasks? 
  public addTask(task) {
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  public getTasks(query?: string): Observable<Task[]> {
    return this.tasks$;
  }

}
