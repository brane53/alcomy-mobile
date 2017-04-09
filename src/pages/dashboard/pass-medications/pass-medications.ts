import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Resident } from '../../../app/models/models';

/*
  Generated class for the PassMedications page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pass-medications',
  templateUrl: 'pass-medications.html'
})
export class PassMedicationsPage {
  resident: Resident;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resident = this.navParams.get('resident');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassMedicationsPage');
  }

  

}
