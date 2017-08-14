import { Component } from '@angular/core';

import { NavController, Platform, ModalController } from 'ionic-angular';
import { Task } from '../../../app/models/models';
import { NewTaskPage } from '../../shared/forms/new-task/new-task';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
// tslint:disable-next-line:component-class-suffix
export class TasksPage {
  title = 'Tasks';
  tasks: Task[] = [
    {
      id: '1',
      description: 'Do the laundry',
      isComplete: false
    },
    {
      id: '2',
      description: 'Do groceries',
      isComplete: false
    },
    {
      id: '3',
      description: 'Cook Dinner for Brane',
      isComplete: false
    },
    {
      id: '4',
      description: 'Rub Brane\'s feet',
      isComplete: false
    }
  ];


  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public modal: ModalController,
    private statusBar: StatusBar) {
    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#0277BD');

    });
  }

  addTask(description: string) {
    if (description) {
      let newTask = new Task(description);
      this.tasks.push(newTask);
      return;
    }

  };

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  };

  presentNewTaskPage() {
    let taskModal = this.modal.create(NewTaskPage);
    taskModal.present();
  };

}
