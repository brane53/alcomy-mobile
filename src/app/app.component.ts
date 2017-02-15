import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DashboardTabsPage } from '../pages/dashboard/dashboard-tabs/dashboard-tabs';
import { Notification } from './models/models';
import * as moment from 'moment';
import { ResidentsTabsPage } from '../pages/residents/residents-tabs/residents-tabs';


@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html'
})
export class MyApp {
  rootPage = DashboardTabsPage;
  notificationButtons = 'all'
  isExpanded = false;


  notifications: Notification[] = [
    {
      id: '1',
      type: 'alert',
      source: 'watchlist',
      event: 'ITEM_CREATE',
      dismissed: false,
      data: {
        title: 'Skin Tear',
        createdBy: 'Ilija Vrajich',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(30, 'minutes').format(),
        images: ['assets/watchlist/skin_tear.jpg'],
        notes: ''
      }
    },
    {
      id: '2',
      type: 'alert',
      source: 'watchlist',
      event: 'BM',
      dismissed: false,
      data: {
        title: 'Bowel Movement',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(40, 'minutes').format(),
        lastBM: moment().subtract(4, 'days').format()
      }
    },
    {
      id: '3',
      type: 'reminder',
      source: 'medications',
      event: 'ORDER_MEDICATION',
      dismissed: false,
      data: {
        title: 'Order Medication',
        createdFor: 'Brane Vrajich',
        createdOn: moment().subtract(2, 'hours').format()
      }
    }
  ]


  @ViewChild('appContent') nav: NavController;

  constructor(platform: Platform, public menu: MenuController) {
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

  dashboard(){
    this.menu.close('main');
    this.nav.setRoot(DashboardTabsPage);
  }

  residents(){
    this.menu.close('main');
    this.nav.setRoot(ResidentsTabsPage);
  }

}
