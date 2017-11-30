import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FacilityListPage } from '../facility-list/facility-list';

@Component({
  selector: 'page-company-tabs',
  templateUrl: 'company-tabs.html'
})

export class CompanyTabsPage {

  tab1Root: any = FacilityListPage;
  tab2Root: any = FacilityListPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) { 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyTabsPage');
  }
}