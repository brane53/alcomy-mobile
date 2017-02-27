import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, MenuController } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { Resident } from '../../../app/models/models';
import { WatchItemDetailPage } from '../watch-item-detail/watch-item-detail';
import { MockResidentsService } from '../../../app/core/residents-mock.service';

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
  title: string = 'Watchlist';
  residents: Resident[];

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public popCtrl: PopoverController, 
  public menu: MenuController, 
  private residentService: MockResidentsService) {

    this.residents = residentService.residents;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardWatchlistPage');
  }

  goToWatchItemDetail(){
    this.navCtrl.push(WatchItemDetailPage);
  }

}
