import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-new-resident',
  templateUrl: 'new-resident.html'
})
export class NewResidentPage implements OnInit {

  newResidentForm: FormGroup;
  genders: string[];

  constructor(private viewCtrl: ViewController, public navParams: NavParams, private fb: FormBuilder) {

    this.genders = ['male', 'female'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewResidentPage');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newResidentForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      gender: [null, Validators.required],
      birthDate: [null]
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
