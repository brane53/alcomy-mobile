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
import { Observable } from 'rxjs/observable';
import { StatusBar } from '@ionic-native/status-bar';
//import { NewResidentFormPage } from '../../shared/forms/new-resident/new-resident';
import { FacilityService } from '../../../app/core/facility/facility.service';
import { Facility } from '../../../app/models/models';
import { FacilityTabsPage } from '../facility-detail/facility-tabs/facility-tabs';
import { NewFacilityFormPage } from '../../shared/forms/new-facility/new-facility';

@Component({
  selector: 'page-facility-list',
  templateUrl: 'facility-list.html'
})
export class FacilityListPage implements OnInit {
  title: string = 'Facility List';
  facilities: Facility[];

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
    this.facilityService.getFacilities().subscribe((facilities)=>{
      console.log(facilities);
      this.facilities = facilities;
    })
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
        this.facilityService.addFacility(facility).subscribe(
          (facility: Facility)=> {
            this.facilities.push(facility);
          },
          (err) => {
            console.log('Error calling addFacility', err);
          }
        );
      }
    });
    
    newFacilityModal.present();
  }

  

}
