import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  newTask: Task = new Task();

  @Output()
  taskAdd: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public addTask(text: string) {
    this.newTask.description = text;
    this.taskAdd.emit(this.newTask);
    this.newTask = new Task();
  }

}
