import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { QuickAddMenuPage } from '../../shared/popovers/quick-add-menu/quick-add-menu';
import { Resident } from '../../../app/models/models';
import { MockResidentsService } from '../../../app/core/residents-mock.service';

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

  residents: Resident[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public popCtrl: PopoverController, private mockResidents: MockResidentsService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResidentsListPage');
  }

  ngOnInit(){
    this.residents = this.mockResidents.residents;
  }

}
