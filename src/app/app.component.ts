import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';


@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage = DashboardTabsPage;
  notificationButtons = 'alerts'
  isExpanded = false;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  expand(){
    if(this.isExpanded){
      this.isExpanded = false;
      return;
    }
    this.isExpanded = true;
  }

}
