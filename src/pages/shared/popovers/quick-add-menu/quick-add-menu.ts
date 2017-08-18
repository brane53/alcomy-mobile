import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { NewTaskFormPage } from '../../forms/new-task/new-task';



/*
  Generated class for the QuickAddMenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quick-add-menu',
  templateUrl: 'quick-add-menu.html'
})
export class QuickAddMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickAddMenuPage');
  }

  presentNewTaskFormPage(){
    let modal = this.modal.create(NewTaskFormPage)
    modal.present();
    this.viewCtrl.dismiss();
  }

}
