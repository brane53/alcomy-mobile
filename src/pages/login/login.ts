import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../app/core/auth.service';
import { DashboardTabsPage } from '../dashboard/dashboard-tabs/dashboard-tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private auth: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(email: string, password){
    this.auth.login(email, password)
      .then(()=>{
        this.navCtrl.setRoot(DashboardTabsPage);
      })
      .catch((err)=>{
        console.log('Problem')
      })
  }

  

}
