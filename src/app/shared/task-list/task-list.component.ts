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

  @Input() tasks: Observable<Task[]>;

  @Input() checkbox: boolean;

  @Output() toggleTaskComplete: EventEmitter<number> = new EventEmitter();

  @Output() taskDelete: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    
  }

  

  public onToggleTaskComplete(taskId: number) {
    this.toggleTaskComplete.emit(taskId);
  }

  /**
   * onTaskDelete
   */
  public onTaskDelete(taskId: number) {
    this.taskDelete.emit(taskId);
  }

}
