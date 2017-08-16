import { Injectable } from '@angular/core';
import { Task } from '../../models/models';
import * as moment from 'moment';

@Injectable()
export class TaskMockService {

  tasks: Task[] = [
    {
      id: '1',
      description: 'Do the laundry',
      isComplete: false,
      createdOn: moment('2017-8-16').format(),
      createdBy: 
    }
  ];

  constructor() { }

  // POST /tasks? 
  public addTask(task) {
    // this
  }

}
