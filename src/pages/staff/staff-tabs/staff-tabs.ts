import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StaffListPage } from '../staff-list/staff-list';
import { StaffGroupsPage } from '../staff-groups/staff-groups';

/*
  Generated class for the StaffTabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staff-tabs',
  templateUrl: 'staff-tabs.html'
})
export class StaffTabsPage {

  tab1Root: any = StaffListPage;
  tab2Root: any = StaffGroupsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StaffTabsPage');
  }

}
