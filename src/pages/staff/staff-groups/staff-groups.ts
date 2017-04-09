import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MockEmployeeService } from '../../../app/core/employee-mock.service';

/*
  Generated class for the StaffGroups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-groups',
  templateUrl: 'staff-groups.html'
})
export class StaffGroupsPage implements OnInit {
  title: string = 'Groups';
  staffGroups: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private mockEmployees: MockEmployeeService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffGroupsPage');
  }

  ngOnInit(){
    this.staffGroups = this.mockEmployees.staffGroups;
  }

}
