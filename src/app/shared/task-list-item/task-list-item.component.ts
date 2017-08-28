import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html'
})
export class TaskListItemComponent implements OnInit {

  @Input() task: Task;

  @Output() toggleComplete: EventEmitter<Task> = new EventEmitter();

  @Output() delete: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toggleTaskComplete(task: Task) {
    this.toggleComplete.emit(task);
  }

  public deleteTask() {
    this.delete.emit(this.task.id);
  }

}
