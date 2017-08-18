import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { NavController, NavParams, PopoverController, ModalController, MenuController, Slides } from 'ionic-angular';
import { DashboardMedicationTabsPage } from '../dashboard-medication-tabs/dashboard-medication-tabs';
import { Resident, PrnRecord } from '../../../app/models/models';
import { PrnResponseFormPage } from '../../shared/forms/prn-response/prn-response';
import { PassMedicationsPage } from '../pass-medications/pass-medications';
import { ResidentsMockService } from '../../../app/core/residents/residents.service';
import { MedicationsMockService } from '../../../app/core/medications/medications.service';

@Component({
  selector: 'page-dashboard-medications',
  templateUrl: 'dashboard-medications.html'
})
export class DashboardMedicationsPage implements OnInit  {
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
    private residentsService: ResidentsMockService,
    private medicationsService: MedicationsMockService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardMedicationsPage');
  }

  ngOnInit() {
    // this.residentsService.residents$.subscribe(residents => {
    //   this.residents = residents;
    // });
    this.prnRecords = this.medicationsService.prnRecords;
  }

  presentPrnResponse() {
    let modal = this.modal.create(PrnResponseFormPage);
    modal.present();
  }

  passMed(resident: Resident) {
    this.navCtrl.push(PassMedicationsPage, {
      resident: resident
    });
  }



}
