import { Component } from '@angular/core';

import { NavController, Platform, ModalController } from 'ionic-angular';
import { Task } from '../../../app/models/models';
import { NewTaskFormPage } from '../../shared/forms/new-task/new-task';
import { StatusBar } from '@ionic-native/status-bar';
import { TaskService } from '../../../app/core/task/task.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
// tslint:disable-next-line:component-class-suffix
export class TasksPage {

  title = 'Tasks';
  tasks: BehaviorSubject<Task[]>;
  
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
    this.taskService.getTasks().subscribe(tasks$ => {
      this.tasks = tasks$;
    });
  }

  public onQuickTaskAdd(task) {
    this.taskService.addTask(task);
  }

  public onToggleTaskComplete(task: Task) {
    this.taskService.toggleTaskComplete(task.id);
  }

  public addTask(description: string) {
    if (description) {
      // this.taskService.addTask()
    }

  };

  public deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  };

  public presentNewTaskFormPage() {
    let taskModal = this.modal.create(NewTaskFormPage);
    taskModal.present();
  };



}
