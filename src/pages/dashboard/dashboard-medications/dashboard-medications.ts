import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { NavController, NavParams, PopoverController, ModalController, MenuController, Slides } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { DashboardMedicationTabsPage } from '../dashboard-medication-tabs/dashboard-medication-tabs';
import { Resident, PrnRecord } from '../../../app/models/models';
import { PrnResponsePage } from '../../shared/forms/prn-response/prn-response';
import { PassMedicationsPage } from '../pass-medications/pass-medications';
import { MockResidentsService } from '../../../app/core/residents-mock.service';
import { MockMedicationsService } from '../../../app/core/medications-mock.service';

/*
  Generated class for the DashboardMedicationsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard-medications',
  templateUrl: 'dashboard-medications.html'
})
export class DashboardMedicationsPage {
  title: string = 'Medications';
  residents: Resident[];
  prnRecords: PrnRecord[];
  medTabButton: string = 'pass';
  currentPrnCardIndex: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public popCtrl: PopoverController, 
    public modal: ModalController, 
    public menu: MenuController, 
    private mockResidents: MockResidentsService, 
    private mockMedications: MockMedicationsService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardMedicationsPagePage');
    
  }

  ngOnInit(){
    this.residents = this.mockResidents.residents;
    this.prnRecords = this.mockMedications.prnRecords;
  }

  presentPrnResponse(){
    let modal = this.modal.create(PrnResponsePage);
    modal.present();
  }

  passMed(resident: Resident) {
    this.navCtrl.push(PassMedicationsPage, {
      resident: resident
    });
  }

  

}
