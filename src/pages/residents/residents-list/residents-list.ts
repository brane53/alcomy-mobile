import { Component, OnInit } from '@angular/core';
import {
  NavController,
  NavParams, MenuController,
  PopoverController,
  App,
  Platform,
  ModalController,
  ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Resident, Facility } from '../../../app/models/models';
import { ResidentsService } from '../../../app/core/residents/residents.service';
import { ResidentDetailTabsPage } from '../resident-detail/resident-detail-tabs/resident-detail-tabs';
import { NewResidentFormPage } from '../../shared/forms/new-resident/new-resident';
import { FacilityService } from '../../../app/core/facility/facility.service';

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
  currentFacility: Facility;

  constructor(
  private app: App,
  public platform: Platform,
  public navCtrl: NavController,
  public navParams: NavParams,
  public menu: MenuController,
  private toast: ToastController,
  private modal: ModalController,
  public popCtrl: PopoverController,
  private residentsService: ResidentsService,
  private facilityService: FacilityService,
  private statusBar: StatusBar) {

    this.platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#C62828');

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentsListPage');
    
    this.facilityService.currentFacility$.subscribe(data => {
      this.currentFacility = data;
    })
  }

  ngOnInit() {
    // this.residentsService.residents$.subscribe(residents => {
    //   this.residents = residents;
    // });

    this.residentsService.residents$
      .subscribe(
        residents => { this.residents = residents; },
        error => { console.log('The Error: ', error); }
      );
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

    let newResidentModal = this.modal.create(NewResidentFormPage);

    newResidentModal.onDidDismiss(resident => {
      if (resident) {
        console.log(resident);
        // create resident when data from form comes back sucessfully
        this.residentsService.addResident(resident, facilityId)
        /* .subscribe((res) => {
          console.log('Submission successful')
          let toast = this.toast.create({
            message: 'Resident created successfully',
            duration: 3000,
            position: 'top',
            cssClass: 'toast-success'
          });

          toast.present();
          this.residentsService.getResidents();
          
        }); */
      }
    });
    newResidentModal.present();
  }

}
