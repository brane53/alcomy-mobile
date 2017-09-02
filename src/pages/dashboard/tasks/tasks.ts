import { Component } from '@angular/core';

import { NavController, Platform, ModalController } from 'ionic-angular';
import { Task } from '../../../app/models/models';
import { NewTaskFormPage } from '../../shared/forms/new-task/new-task';
import { StatusBar } from '@ionic-native/status-bar';
import { TaskService } from '../../../app/core/task/task.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { TASK_FILTERS } from '../../../config/tasks.config';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
// tslint:disable-next-line:component-class-suffix
export class TasksPage {

  title: string = 'Tasks';
  tasks$: Observable<Task[]>;
  completionOptions = TASK_FILTERS.completionOptions;
  completionFilter: string = 'incomplete';
  sort: string = '';

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public modal: ModalController,
    private statusBar: StatusBar,
    private taskService: TaskService) {
    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#0277BD');

    });
  }

  ionViewDidLoad() {
    this.taskService.getTasks({completionType: 'incomplete'});
    this.tasks$ = this.taskService.tasks$;
  }


  public onQuickTaskAdd(task: Task) {
    this.taskService.addTask(task, {completionType: this.completionFilter});
  }


  public onToggleTaskComplete(taskId: number) {
    this.taskService.toggleTaskComplete(taskId, {completionType: this.completionFilter});
  }


  public onTaskDelete(taskId: number) {
    this.taskService.deleteTask(taskId, {completionType: this.completionFilter});
  };

  public onFilterChange(value){
    this.taskService.getTasks({completionType: this.completionFilter});
  }


  public presentNewTaskFormPage() {
    let taskModal = this.modal.create(NewTaskFormPage);
    taskModal.present();
  };



}
