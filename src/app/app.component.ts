import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { Notification } from './models/models';
import * as moment from 'moment';
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';
import { StaffTabsPage } from '../pages/staff/staff-tabs/staff-tabs';
import { MockNotificationService } from './core/notification-mock.service';


@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html'
})
export class MyApp implements OnInit {
  rootPage = DashboardTabsPage;
  notificationButtons = 'all'
  isExpanded = false;


  notifications: Notification[];


  @ViewChild('appContent') nav: NavController;

  constructor(
    private platform: Platform, 
    public menu: MenuController, 
    private mockNotification: MockNotificationService) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit(){
    this.notifications = this.mockNotification.notifications;
  }

  expand(){
    if(this.isExpanded){
      this.isExpanded = false;
      return;
    }
    this.isExpanded = true;
  }

  dashboard(){
    this.menu.close('main');
    this.nav.setRoot(DashboardTabsPage);
  }

  residents(){
    this.menu.close('main');
    this.nav.setRoot(ResidentsTabsPage);
  }

  staff() {
    this.menu.close('main');
    this.nav.setRoot(StaffTabsPage);
  }

}
