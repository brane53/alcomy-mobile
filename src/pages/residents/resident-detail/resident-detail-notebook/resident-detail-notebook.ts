import { Component } from '@angular/core';
import { NavController, NavParams, App, ViewController, Events } from 'ionic-angular';
import { ResidentsTabsPage } from '../../residents-tabs/residents-tabs';

/*
  Generated class for the ResidentDetailNotebook page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resident-detail-notebook',
  templateUrl: 'resident-detail-notebook.html'
})
export class ResidentDetailNotebookPage {
  title: string = 'Notebook';
  resident: any;

  constructor(
    private app: App,
    private viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events) {
    this.resident = navParams.data.resident;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentDetailNotebookPage');
  }

  goBack() {
    //this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(ResidentsTabsPage);
  }

}
