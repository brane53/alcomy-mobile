import { Injectable } from '@angular/core';
import { Task, User } from '../../models/models';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class TaskMockService {

  fakeTasks: Task[] = [
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

   tasks: BehaviorSubject<Task[]> = new BehaviorSubject(this.fakeTasks);
  //tasks$: Observable<User[]> = this.tasks.asObservable();

  constructor(private userService: UserService) { }

  // POST /tasks?
  public addTask(task) {
    
    if (this.fakeTasks.length < 1) {
      task.id = 1;
    } else {
      let lastIndex = this.fakeTasks.length - 1;
      task.id = this.fakeTasks[lastIndex].id++;
    }

    this.fakeTasks.push(task);
    this.tasks.next(this.fakeTasks);
  }

  // DELETE /tasks/:id
  public deleteTask(taskId) {

    // set this.tasks to a new array with everyting except the deleted task.
    this.fakeTasks = this.fakeTasks.filter(task => {
      return task.id !== taskId;
    });

    // push this.tasks into the tasks$ observable.
    this.tasks.next(this.fakeTasks);
  }

  // GET /tasks get all tasks or a subset of tasks based on an included query string.
  public getTasks(query?: string): Observable<Task[]> {
    return this.tasks;
  }

  // PUT /tasks/:id mark a task as complete
  public toggleTaskComplete(taskId) {
    let user = this.userService.currentUser;
    this.fakeTasks = this.fakeTasks.map(task => {
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

    this.tasks.next(this.fakeTasks);

  }

}
