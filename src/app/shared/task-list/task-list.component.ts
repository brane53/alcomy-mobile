import { Component, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnChanges {

  @Input() tasks: Observable<Task[]>;

  @Output() toggleTaskComplete: EventEmitter<Task> = new EventEmitter();

  @Output() taskDelete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    
  }

  

  public onToggleTaskComplete(task: Task) {
    this.toggleTaskComplete.emit(task);
  }

  /**
   * onTaskDelete
   */
  public onTaskDelete(task: Task) {
    this.taskDelete.emit(task)
  }

}
