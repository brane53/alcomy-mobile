import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacilityRoomsComponent } from '../facility-rooms/facility-rooms';


@Component({
  selector: 'page-facility-tabs',
  templateUrl: 'facility-tabs.html'
})

export class FacilityTabsPage {

  tab1Root: any = FacilityRoomsComponent;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }
}