import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, Events } from 'ionic-angular';
import { ResidentsTabsPage } from '../../residents-tabs/residents-tabs';
import { MedicationRecord } from '../../../../app/models/models';

/*
  Generated class for the ResidentDetailMedications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resident-detail-medications',
  templateUrl: 'resident-detail-medications.html'
})
export class ResidentDetailMedicationsPage {
  title: string = 'Medications';
  resident: any;
  medicationTabButton: string = 'list';
  medicationRecords: MedicationRecord[];

  constructor(
    private app: App,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {
    this.resident = navParams.data.resident;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentDetailMedicationsPage');

    this.medicationRecords = this.resident.medications;
  }

  goBack() {
    // this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(ResidentsTabsPage);
  }

}
