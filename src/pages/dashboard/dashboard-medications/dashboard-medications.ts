import { Component } from '@angular/core';
import * as moment from 'moment';
import { NavController, NavParams, PopoverController, ModalController, MenuController } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { DashboardMedicationTabsPage } from '../dashboard-medication-tabs/dashboard-medication-tabs';
import { Resident, PrnRecord } from '../../../app/models/models';
import { PrnResponsePage } from '../../shared/forms/prn-response/prn-response';

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

  residents: Resident[] = [
    {
      id: '1',
      firstName: 'Brane',
      lastName: 'Vrajich',
      middleName: '',
      profileUrl: '../../../assets/avatars/brane.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        },
      ]
    },
    {
      id: '2',
      firstName: 'Justin',
      lastName: 'Kunz',
      middleName: 'Don',
      profileUrl: '../../../assets/avatars/justin.jpg',
      medications: [
        {
          name: 'Tylonal'
        },
        {
          name: 'Tylonal'
        }
      ]
    },
    {
      id: '3',
      firstName: 'Josh',
      lastName: 'Wood',
      middleName: 'Thomas',
      profileUrl: '../../../assets/avatars/josh.jpg',
      medications: [
        {
          name: 'Tylonal'
        }
      ]
    }

  ];

  prnRecords: PrnRecord[] = [
    {
      id: '1',
      medication: {
        brandName: 'Tylonal',
        genericName: 'acetaminophen',
        description: 'Used to relieve pain',
        instructions: 'You can give no more than 2 tablets every 6 hours'
      },
      reasonGiven: 'Resident complained of having a headache',
      givenAt: moment().subtract(4, 'hours').format(),
      givenBy: {
        firstName: 'Ilija',
        lastName: 'Vrajich'
      },
      followUpDateTime: moment().add(2, 'hours').format()

    },
    {
      id: '1',
      medication: {
        brandName: 'Tylonal',
        genericName: 'acetaminophen',
        description: 'Used to relieve pain',
        instructions: 'You can give no more than 2 tablets every 6 hours'
      },
      reasonGiven: 'Resident complained of having a headache',
      givenAt: moment().subtract(4, 'hours').format(),
      givenBy: {
        firstName: 'Ilija',
        lastName: 'Vrajich'
      },
      followUpDateTime: moment().add(2, 'hours').format()

    }
  ];
  medTabButton: string = 'pass';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popCtrl: PopoverController, public modal: ModalController, public menu: MenuController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardMedicationsPagePage');
    
  }

  presentQuickAdd(event) {
    let quickAddMenu = this.popCtrl.create(QuickAddMenuPage);
    quickAddMenu.present({
      ev: event
    });
  }

  presentPrnResponse(){
    let modal = this.modal.create(PrnResponsePage);
    modal.present();
  }

}
