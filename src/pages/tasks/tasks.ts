import { Component } from '@angular/core';


import { NavController, Platform } from 'ionic-angular';
import { Task } from '../../app/models/models';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: Task[] = [
    {
      description: 'Do the laundry',
      isComplete: false
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

  constructor(public navCtrl: NavController) {
    
  }

  addTask(description: string){
    let newTask = new Task(description)
    this.tasks.push(newTask);
  }

}
