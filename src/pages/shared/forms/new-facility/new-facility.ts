import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Facility } from '../../../../app/models/models';


@Component({
  selector: 'page-new-facility-form',
  templateUrl: 'new-facility.html'
})
export class NewFacilityFormPage {
  title: string;
  facility: Facility;
  newFacilityForm: FormGroup;

  constructor(
    private viewCtrl: ViewController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private toast: ToastController) { 

    if (navParams.data) {
      this.facility = navParams.data;
      this.title = 'Edit Facility';
    }
    else {
      this.title = 'New Facility';
    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFacilityPage');
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newFacilityForm = this.fb.group({
      name: [this.facility.name || '', Validators.required],
      displayName: [this.facility.displayName || ''],
      facilityNumber: [this.facility.facilityNumber || '', CustomValidators.digits],
      status: [this.facility.status || 'active', Validators.required],
      addressLine1: [this.facility.addressLine1 || ''],
      addressLine2: [this.facility.addressLine2 || ''],
      city: [this.facility.city || ''],
      stateOrProvince: [this.facility.stateOrProvince || ''],
      postalCode: [this.facility.postalCode || '', CustomValidators.digits]
    });
  }

  close() {
    this.viewCtrl.dismiss();
  }

  submit() {

    console.log(this.newFacilityForm.errors);
    let areErrors = false;

    // submit implementation
    if (areErrors) {
      for (var control in this.newFacilityForm.controls) {

        if (this.newFacilityForm.controls.hasOwnProperty(control)) {
          this.newFacilityForm.get(control).markAsTouched({ onlySelf: false });
        }
      }

      let toast = this.toast.create({
        message: 'Required fields not valid',
        duration: 3000,
        position: 'top',
        cssClass: 'toast-error'
      });
      toast.present();
      return;
    }
    this.viewCtrl.dismiss(this.newFacilityForm.value);
  }

}
