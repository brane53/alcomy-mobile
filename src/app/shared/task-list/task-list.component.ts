import { Component, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnChanges {

  @Input() tasks: BehaviorSubject<Task[]>;

  @Output() toggleTaskComplete: EventEmitter<Task> = new EventEmitter();

  @Output() taskDelete: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    
  }

  

  public onToggleTaskComplete(task: Task) {
    this.toggleTaskComplete.emit(task);
  }

  /**
   * onTaskDelete
   */
  public onTaskDelete(taskId: Number) {
    this.taskDelete.emit(taskId);
  }

}
