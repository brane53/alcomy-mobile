import { Component } from '@angular/core';

import { NavController, Platform, ModalController } from 'ionic-angular';
import { Task } from '../../../app/models/models';
import { NewTaskFormPage } from '../../shared/forms/new-task/new-task';
import { StatusBar } from '@ionic-native/status-bar';
import { TaskService } from '../../../app/core/task/task.service';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
// tslint:disable-next-line:component-class-suffix
export class TasksPage {
  title = 'Tasks';

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
    this.taskService.getTasks();
  }

  public onTaskAdd(task) {
    
  }

  addTask(description: string) {
    if (description) {
      //this.taskService.addTask()
    }

  };

  deleteTask(index: number) {
    //this.tasks.splice(index, 1);
  };

  presentNewTaskFormPage() {
    let taskModal = this.modal.create(NewTaskFormPage);
    taskModal.present();
  };

  

}
