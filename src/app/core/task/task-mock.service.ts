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
      completedOn: null,
      completedBy: null,
      createdOn: moment('2017-8-16').format(),
      dueDate: '',
      createdBy: {
        id: 1,
        firstName: 'brane',
        lastName: 'vrajich'
      },
      assignedTo: []
    }
  ];

  private tasks$$: BehaviorSubject<Task[]> = new BehaviorSubject(this.fakeTasks);
  tasks$: Observable<User[]> = this.tasks$$.asObservable();

  constructor(private userService: UserService) { }

  // POST /tasks?
  public addTask(task, query) {
    if (this.fakeTasks.length < 1) {
      task.id = 1;
    } else {
      let lastIndex = this.fakeTasks.length - 1;
      task.id = this.fakeTasks[lastIndex].id + 1;
    }
    task.createdOn = moment().format();
    task.createdBy = this.userService.currentUser;
    this.fakeTasks.push(task);
    this.getTasks(query);
  }


  // DELETE /tasks/:id - assigns fakeTasks to a new array consisting of all tasks except the task with the provided
  // id. fakeTasks is then pushed into the tasks behavior subject
  public deleteTask(taskId, query) {
    Observable.from(this.fakeTasks)
    .filter(task => {
      return task.id !== taskId;
    })
    .reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, [])
    .subscribe(
      tasks => {
        // push this.tasks into the tasks$ observable.
        this.fakeTasks = tasks;
        this.tasks$$.next(tasks);
      },
      err => {
        console.log(`problem deleting tasks. TaskMockService.deleteTask(): ${err}`);
      },
      () => {
        console.log('deleted task');
      }
    );

    this.getTasks(query);
  }


  // GET /tasks get all tasks or a subset of tasks based on an included query string.
  // 'completionType=incomplete;sort=none'
  public getTasks(query?: {completionType: string}) {
    let filteredTasks = this.filterCompletionType(query);
    this.tasks$$.next(filteredTasks);
  }

  private filterCompletionType(query) {
    return this.fakeTasks.filter(task => {
      if (query.completionType === 'incomplete') {
        return task.isComplete === false;
      } else if (query.completionType === 'complete') {
        return task.isComplete === true;
      }
      return true;
    });
  }


  // PUT /tasks/:id mark a task as complete
  public toggleTaskComplete(taskId: number, query: {completionType: string}) {
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
    this.getTasks(query);
  }

}
