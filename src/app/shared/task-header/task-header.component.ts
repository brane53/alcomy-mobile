import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';

@Component({
  selector: 'task-header',
  templateUrl: './task-header.component.html'
})
export class TaskHeaderComponent {

  newTask: Task = new Task();

  @Output()
  quickTaskAdd: EventEmitter<Task> = new EventEmitter();

  constructor() { }


  public addQuickTask(text: string) {
    this.newTask.description = text;
    this.quickTaskAdd.emit(this.newTask);
    this.newTask = new Task();
  }

}
