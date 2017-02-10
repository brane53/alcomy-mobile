import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DashboardWatchlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard-watchlist',
  templateUrl: 'dashboard-watchlist.html'
})
export class DashboardWatchlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardWatchlistPage');
  }

}
