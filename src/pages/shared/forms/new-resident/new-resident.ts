import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Resident } from '../../../../app/models/models';

@Component({
  selector: 'page-new-resident',
  templateUrl: 'new-resident.html'
})
export class NewResidentPage implements OnInit {
  title: string;
  newResidentForm: FormGroup;
  genders: string[];
  resident: Resident;

  // Constructor
  constructor(private viewCtrl: ViewController, public navParams: NavParams, private fb: FormBuilder) {

    this.genders = ['male', 'female'];

    if (navParams.data) {
      this.resident = navParams.data;
      this.title = 'Edit Resident';
    }
    else {
      this.title = 'New Resident';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewResidentPage');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newResidentForm = this.fb.group({
      firstName: [this.resident.firstName || '', Validators.required],
      middleName: [this.resident.middleName || ''],
      lastName: [this.resident.lastName || '', Validators.required],
      gender: [this.resident.gender || null, Validators.required],
      birthDate: [this.resident.birthDate || null],
      ssn: [this.resident.ssn || null],
      religion: [this.resident.religion || null],
      isAmbulatory: [this.resident.isAmbulatory || false],
      isVerbal: [this.resident.isVerbal || false]
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  submit() {
    // submit implementation
    this.viewCtrl.dismiss(this.newResidentForm.value);
  }

}
