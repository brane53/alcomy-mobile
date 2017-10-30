import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, Events, ModalController } from 'ionic-angular';
import { ResidentsTabsPage } from '../../residents-tabs/residents-tabs';
import { Resident, ResidentContact } from '../../../../app/models/models';
import { NewResidentFormPage } from '../../../shared/forms/new-resident/new-resident';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-resident-detail-facesheet',
  templateUrl: 'resident-detail-facesheet.html'
})
export class ResidentDetailFacesheetPage {
  title: string = 'Facesheet';
  facesheetTabButton: string = 'general';
  resident: Resident;
  facilityInfo: any;
  paymentInfo: any;
  emergencyContacts: ResidentContact[];

  constructor(
    private app: App,
    private callNumber: CallNumber,
    private viewCtrl: ViewController,
    private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {

    this.resident = navParams.data.resident;
    this.facilityInfo = this.resident.facilityInfo;
    this.paymentInfo = this.resident.paymentInfo;
    this.emergencyContacts = this.resident.emergencyContacts;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentDetailFacesheetPage');
  }

  editBasicInfo(resident) {

    let newResidentModal = this.modal.create(NewResidentFormPage, resident);
    newResidentModal.onDidDismiss((data: Resident) => {
      if (data) {
        console.log(data);
        this.resident.firstName = data.firstName;
        this.resident.middleName = data.middleName;
        this.resident.lastName = data.lastName;
        this.resident.gender = data.gender;
        this.resident.ssn = data.ssn;
        this.resident.religion = data.religion;
        this.resident.isAmbulatory = data.isAmbulatory;
        this.resident.isVerbal = data.isVerbal;
      }

    });
    newResidentModal.present();
  }

  // FIX: call-number plugin seems to be having some issues when building
  callContact(contact: ResidentContact) {

    let primaryPhone = contact.phoneNumbers.filter((phone) => {
      return phone.isPrimary;
    });
    let numberToCall = primaryPhone[0].number;

    this.callNumber.callNumber(numberToCall, true)
    .then(() => console.log('Dialer Launched'))
    .catch(() => console.log('Something when wrong when launching dialer'));
  }

  // IMPLEMENT:
  textContact() {

  }

  // IMPLEMENT:
  emailContact() {

  }

  private goBack() {
    // this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(ResidentsTabsPage);
  }

  private yesOrNo(bool: boolean) {
    if (typeof bool !== 'boolean') {
      throw 'parameter should be a boolean';
    }
    if (bool === true) {
      return 'Yes';
    } else if (bool === false) {
      return 'No';
    }
  }

}
