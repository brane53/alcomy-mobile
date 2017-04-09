import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { Notification } from './models/models';
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';
import { StaffTabsPage } from '../pages/staff/staff-tabs/staff-tabs';
import { MockNotificationService } from './core/notification-mock.service';
// import { LoginPage } from '../pages/login/login';


@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html'
})
export class MyAppComponent implements OnInit {
  rootPage = DashboardTabsPage;
  // rootPage = LoginPage;
  notificationButtons = 'all';
  isExpanded = false;


  notifications: Notification[];


  @ViewChild('appContent') nav: NavController;

  constructor(
  private platform: Platform,
  public menu: MenuController,
  private mockNotification: MockNotificationService,
  private statusBar: StatusBar,
  private splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    this.notifications = this.mockNotification.notifications;
  }

  expand() {
    if (this.isExpanded) {
      this.isExpanded = false;
      return;
    }
    this.isExpanded = true;
  }

  dashboard() {
    this.menu.close('main');
    this.nav.setRoot(DashboardTabsPage);
  }

  residents() {
    this.menu.close('main');
    this.nav.setRoot(ResidentsTabsPage);
  }

  staff() {
    this.menu.close('main');
    this.nav.setRoot(StaffTabsPage);
  }

}
