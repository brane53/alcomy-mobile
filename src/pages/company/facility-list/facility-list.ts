import { Component, OnInit } from '@angular/core';
import {
  NavController,
  NavParams, MenuController,
  PopoverController,
  App,
  Platform,
  ModalController,
  ToastController
} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
//import { NewResidentFormPage } from '../../shared/forms/new-resident/new-resident';
import { FacilityService } from '../../../app/core/facility/facility.service';
import { Facility } from '../../../app/models/models';
import { FacilityTabsPage } from '../facility-detail/facility-tabs/facility-tabs';
import { NewFacilityFormPage } from '../../shared/forms/new-facility/new-facility';

/*
  Generated class for the ResidentsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-facility-list',
  templateUrl: 'facility-list.html'
})
export class FacilityListPage implements OnInit {
  title: string = 'Facility List';
  facility: Facility;

  constructor(
    private app: App,
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private toast: ToastController,
    private modal: ModalController,
    public popCtrl: PopoverController,
    private facilityService: FacilityService,
    private statusBar: StatusBar) {

    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#C62828');

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilityListPage');
  }

  ngOnInit() {
    
  }

  goToDetails(facility: Facility) {
    let rootNav = this.app.getRootNav();
    let currentNav = this.app.getActiveNav();
    rootNav.push(FacilityTabsPage, {
      facility: facility
    });
  }

  openNewFacilityModal() {
    let data;

    let newFacilityModal = this.modal.create(NewFacilityFormPage);

    newFacilityModal.onDidDismiss(facility => {
      if (facility) {
        console.log(facility);
        
      }
    });
    
    newFacilityModal.present();
  }

}
