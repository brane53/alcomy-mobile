import { Component } from '@angular/core';


import { NavController, Platform, ModalController } from 'ionic-angular';
import { Task } from '../../app/models/models';
import { NewTaskModalPage } from '../new-task-modal/new-task-modal';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

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
      description: "Rub Brane's feet",
      isComplete: false
    }
  ];
  
  
  constructor(public navCtrl: NavController, public modal: ModalController) {
    
  }

  addTask(description: string){
    if(description){
      let newTask = new Task(description)
      this.tasks.push(newTask);
      return;
    }
    
  };

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  };

  openNewTaskModal(){
    let taskModal = this.modal.create(NewTaskModalPage);
    taskModal.present();
  };

}
