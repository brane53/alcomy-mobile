import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, Events } from 'ionic-angular';
import { ResidentsTabsPage } from '../../residents-tabs/residents-tabs';
import { Resident } from '../../../../app/models/models';
import * as moment from 'moment';

@Component({
  selector: 'page-resident-detail-facesheet',
  templateUrl: 'resident-detail-facesheet.html'
})
export class ResidentDetailFacesheetPage {

  resident: Resident;
  facesheetTabButton: string = "general";
  residentBasicInfo: any;
  residentEmergency: any;

  constructor(private app: App, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private events: Events) {
    this.resident = navParams.data.resident;

    this.residentBasicInfo = [
      {
        label: 'Date of Birth',
        value: moment(this.resident.birthDate).format('MM/DD/YYYY') || '-'
      },
      {
        label: 'Gender',
        value: this.resident.gender || '-'
      },
      {
        label: 'SSN',
        value: this.resident.ssn || '-'
      },
      {
        label: 'Religion',
        value: this.resident.religion || '-'
      },
      {
        label: 'Ambulatory?',
        value: this.yesOrNo(this.resident.isAmbulatory) || '-'
      },
      {
        label: 'Verbal?',
        value: this.yesOrNo(this.resident.isVerbal) || '-'
      },
      {
        label: 'Code',
        value: this.resident.code || '-'
      },
 
    ]
  }

  private yesOrNo(boolean){
    if(boolean){
      return 'Yes';
    }
    else {
      return 'No';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentDetailFacesheetPage');
  }

  goBack(){
    //this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(ResidentsTabsPage);
  }

}
