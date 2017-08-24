import { Injectable } from '@angular/core';
import { Task } from '../../models/models';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskMockService {

  tasks: Task[] = [
    {
      id: 1,
      description: 'Do the laundry',
      isComplete: false,
      createdOn: moment('2017-8-16').format(),
      dueDate: '',
      createdBy: null,
      assignedTo: []
    }
  ];

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject(this.tasks);

  constructor(private userService: UserService) { }

  // POST /tasks?
  public addTask(task) {
    let lastIndex = this.tasks.length - 1;
    if (lastIndex !== undefined) {
      task.id = this.tasks[lastIndex].id++;
    } else {
      task.id = 1;
    }
    this.tasks.push(task);
    this.tasks$.next(this.tasks);
  }

  // DELETE /tasks/:id
  public deleteTask(taskId) {

    // set this.tasks to a new array with everyting except the deleted task.
    this.tasks = this.tasks.filter(task => {
      return task.id !== taskId;
    });

    // push this.tasks into the tasks$ observable.
    this.tasks$.next(this.tasks);
  }

  // GET /tasks get all tasks or a subset of tasks based on an included query string.
  public getTasks(query?: string): Observable<Task[]> {
    return this.tasks$;
  }

  // PUT /tasks/:id mark a task as complete
  public toggleTaskCompletion(taskId) {
    let user = this.userService.currentUser;
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        if (task.isComplete === false) {
          task.isComplete = true;
          task.completedOn = moment().format();
          task.completedBy = user;
        } else {
          task.isComplete = false;
          task.completedOn = null;
          task.completedBy = null;
        }
      }
        return task;
    });

    this.tasks$.next(this.tasks);

  }

}
