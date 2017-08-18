import { Component } from '@angular/core';
import { NavController, NavParams, Events  } from 'ionic-angular';
import { ResidentDetailFacesheetPage } from '../resident-detail-facesheet/resident-detail-facesheet';
import { ResidentDetailMedicationsPage } from '../resident-detail-medications/resident-detail-medications';
import { ResidentDetailCarePage } from '../resident-detail-care/resident-detail-care';
import { ResidentDetailNotebookPage } from '../resident-detail-notebook/resident-detail-notebook';
import { ResidentDetailReportsPage } from '../resident-detail-reports/resident-detail-reports';

/*
  Generated class for the ResidentDetailTabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resident-detail-tabs',
  templateUrl: 'resident-detail-tabs.html'
})
export class ResidentDetailTabsPage {

  resident: any;

  tab1Root: any = ResidentDetailFacesheetPage;
  tab2Root: any = ResidentDetailMedicationsPage;
  tab3Root: any = ResidentDetailCarePage;
  tab4Root: any = ResidentDetailNotebookPage;
  tab5Root: any = ResidentDetailReportsPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {

    this.resident = this.navParams.data;
    console.log('Resident: ', this.resident);

    events.subscribe('resident-detail-closed', () => {
      this.pop();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentDetailTabsPage');
  }

  pop(){
    this.navCtrl.popAll();
  }

}
