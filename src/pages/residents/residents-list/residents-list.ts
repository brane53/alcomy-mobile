import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, PopoverController, App, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { Resident } from '../../../app/models/models';
import { MockResidentsService } from '../../../app/core/residents-mock.service';
import { ResidentDetailTabsPage } from '../resident-detail/resident-detail-tabs/resident-detail-tabs';
import { NewResidentPage } from '../../shared/forms/new-resident/new-resident';

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
  public platform: Platform,
  public navCtrl: NavController,
  public navParams: NavParams,
  public menu: MenuController,
  private modal: ModalController,
  public popCtrl: PopoverController,
  private mockResidents: MockResidentsService,
  private statusBar: StatusBar) {

    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#C62828');

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentsListPage');
  }

  ngOnInit(){
    this.residents = this.mockResidents.residents;
  }

  goToDetails(resident: Resident) {
    let rootNav = this.app.getRootNav();
    let currentNav = this.app.getActiveNav();
    rootNav.push(ResidentDetailTabsPage, {
      resident: resident
    });
  }

  openNewResidentModal(resident) {
    let data;

    let newResidentModal = this.modal.create(NewResidentPage);
    newResidentModal.onDidDismiss(resident => {
      if (resident) {
        console.log(resident);
      }
    });
    newResidentModal.present();
  }

}
