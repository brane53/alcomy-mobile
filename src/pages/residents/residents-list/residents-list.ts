import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, PopoverController, App } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { Resident } from '../../../app/models/models';
import { MockResidentsService } from '../../../app/core/residents-mock.service';
import { ResidentDetailTabsPage } from '../resident-detail/resident-detail-tabs/resident-detail-tabs';

/*
  Generated class for the ResidentsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-residents-list',
  templateUrl: 'residents-list.html'
})
export class ResidentsListPage implements OnInit {
  title: string = 'Resident List';
  residents: Resident[];

  constructor(
  private app: App,
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public menu: MenuController, 
  public popCtrl: PopoverController, 
  private mockResidents: MockResidentsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentsListPage');
  }

  ngOnInit(){
    this.residents = this.mockResidents.residents;
  }

  goToDetails(resident: Resident){
    let rootNav = this.app.getRootNav();
    let currentNav = this.app.getActiveNav()
    rootNav.push(ResidentDetailTabsPage, {
      resident: resident
    });
  }

}
