import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, MenuController } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { Resident } from '../../../app/models/models';
import { WatchItemDetailPage } from '../watch-item-detail/watch-item-detail';

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


  residents: Resident[] = [
    {
      id: '1',
      firstName: 'Brane',
      lastName: 'Vrajich',
      middleName: '',
      profileUrl: 'assets/avatars/brane.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
      ]
    },
    {
      id: '2',
      firstName: 'Justin',
      lastName: 'Kunz',
      middleName: 'Don',
      profileUrl: 'assets/avatars/justin.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        }
      ]
    },
    {
      id: '3',
      firstName: 'Josh',
      lastName: 'Wood',
      middleName: 'Thomas',
      profileUrl: 'assets/avatars/josh.jpg',
      medications: [
        {
          name: 'Tylonal'
        }
      ]
    }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardWatchlistPage');
  }

  goToWatchItemDetail(){
    this.navCtrl.push(WatchItemDetailPage);
  }

}
