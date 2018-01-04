import { Component } from '@angular/core';
import {
  NavController,
  NavParams, MenuController,
  PopoverController,
  App,
  Platform,
  ModalController,
  ToastController
} from 'ionic-angular';
import { HttpErrorResponse } from '@angular/common/http';
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
export class FacilityListPage {
  title: string = 'Facility List';
  facilities: Observable<Facility[]> = this.facilityService.facilities$;

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

    this.facilityService.getFacilities().subscribe(
      facilities => {
        console.log(facilities);
      },
      (err)=> {
        console.error(`FacilityListPage: ionViewDidLoad: FacilityService.getFacilities`, err);
        if(err.error instanceof Error) {
          // Client-side or Network Error
          console.log('Client-side/Network Error', err.error.message);
        } else {
          // Backend Error
          console.log(`Backend returned error code ${err.status}. Body was ${err.error}`)
        }
      }
    );
  }

  refreshFacilities(refresher) {
    this.facilityService.getFacilities().subscribe(
      facilities => {
        console.log(facilities);
        refresher.complete();
      },
      (err) => {
        refresher.complete();
        console.error(`FacilityList: refreshResidents: FacilityService.getFacilities`, err);
        if (err.error instanceof Error) {
          // Client-side or Network Error
          console.log('Client-side/Network Error', err.error.message);
        } else {
          // Backend Error
          console.log(`Backend returned error code ${err.status}. Body was ${err.error}`)
        }
      }
    );
  }

  goToDetails(facility: Facility) {
    console.log('FacilityList: goToDetails: facility param', facility);
    let rootNav = this.app.getRootNav();
    let currentNav = this.app.getActiveNav();
    rootNav.push(FacilityTabsPage, {
      facility: facility
    });
  }

  openNewFacilityModal() {
    let data;

    let newFacilityModal = this.modal.create(NewFacilityFormPage);

    newFacilityModal.onDidDismiss((facility: Facility) => {
      if (facility) {
        console.log(`FacilityList: openNewFacilityModal: onDidDismiss: facility param ${facility}`);
        this.facilityService.addFacility(facility).subscribe(
          (newFacility: Facility)=> {
            let toast = this.toast.create({
              message: `Facility successfully created`,
              duration: 3000,
              position: 'bottom',
              cssClass: 'toast-success toast-wrapper'
            });

            toast.present()
          },
          (err: HttpErrorResponse) => {
            console.log('Error calling addFacility', err);
            let toastObj = {
              message: '',
              duration: 3000,
              position: 'bottom',
              cssClass: 'toast-error toast-wrapper'
            };

            if(err.status === 500) {
              toastObj.message = `Facility failed to save due to ${err.statusText}`;
            } else {
              toastObj.message = `Error code: ${err.status}; Error Message: ${err.statusText}`
            }
            let toast = this.toast.create(toastObj);

            toast.present();
          }
        );
      }
    });
    
    newFacilityModal.present();
  }



  

}
