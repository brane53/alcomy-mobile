import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { Task } from '../../models/models';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html'
})
export class TaskListItemComponent implements OnInit {

  @Input() task: Task;

  @Output() toggleComplete: EventEmitter<number> = new EventEmitter();

  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  

  public toggleTaskComplete() {
    this.toggleComplete.emit(this.task.id);
    
  }

  public deleteTask() {
    this.delete.emit(this.task.id);

  }

}
