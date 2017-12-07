import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { CompanyTabsPage } from '../../company-tabs/company-tabs';

@Component({
  selector: 'page-facility-rooms',
  templateUrl: 'facility-rooms.html'
})

export class FacilityRoomsPage implements OnInit {
  title = 'Rooms';
  
  constructor(private app: App) { }

  ngOnInit() { }

  private goBack() {
    // this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(CompanyTabsPage);
  }
}