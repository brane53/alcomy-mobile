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
      description: 'Do the laundry',
      isComplete: false,
      time: '7:00am'
    },
    {
      description: 'Do groceries',
      isComplete: false
    },
    {
      description: 'Cook Dinner for Brane',
      isComplete: false
    },
    {
      description: "Rub Brane's feet",
      isComplete: false
    }
  ];
  
  
  constructor(public navCtrl: NavController, public modal: ModalController) {
    
  }

  addTask(description: string){
    let newTask = new Task(description)
    this.tasks.push(newTask);
    
  }

  openNewTaskModal(){
    let taskModal = this.modal.create(NewTaskModalPage);
    taskModal.present();
  }

}
