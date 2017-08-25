import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html'
})
export class TaskListItemComponent implements OnInit {

  @Input() task: Task;

  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();

  @Output() delete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task)
  }

  public deleteTask(task: Task) {
    this.delete.emit(task);
  }

}
