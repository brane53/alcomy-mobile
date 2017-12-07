import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacilityRoomsPage } from '../facility-rooms/facility-rooms';
import { FacilityProfilePage } from '../facility-profile/facility-profile';
import { Facility } from '../../../../app/models/models';


@Component({
  selector: 'page-facility-tabs',
  templateUrl: 'facility-tabs.html'
})

export class FacilityTabsPage {
  facility: Facility;

  tab1Root: any = FacilityProfilePage;
  tab2Root: any = FacilityRoomsPage;

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.facility = navParams.data;
    console.log('Facility in Tabs', this.facility);
  }

  ionViewDidLoad() {

  }
}