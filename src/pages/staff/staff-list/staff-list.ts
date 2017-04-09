import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Employee } from '../../../app/models/models';
import { MockEmployeeService } from '../../../app/core/employee-mock.service';
import { StatusBar } from '@ionic-native/status-bar';

/*
  Generated class for the StaffList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-list',
  templateUrl: 'staff-list.html'
})
export class StaffListPage implements OnInit {
  title: string = 'Staff List';
  employees: Employee[];

  constructor(
  public platform: Platform, 
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private mockEmployees: MockEmployeeService,
  private statusBar: StatusBar) {
    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#FF8F00');

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffListPage');
  }

  ngOnInit(){
    this.employees = this.mockEmployees.employees;
  }

}
