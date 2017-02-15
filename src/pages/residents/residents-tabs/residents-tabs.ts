import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResidentsListPage } from '../residents-list/residents-list';
import { ResidentsGroupsPage } from '../residents-groups/residents-groups';

/*
  Generated class for the ResidentsTabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-residents-tabs',
  templateUrl: 'residents-tabs.html'
})
export class ResidentsTabsPage {


  tab1Root: any = ResidentsListPage;
  tab2Root: any = ResidentsGroupsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentsTabsPage');
  }

}
