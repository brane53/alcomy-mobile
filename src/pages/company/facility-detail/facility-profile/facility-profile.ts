import { Component } from '@angular/core';
import { App, PopoverController, NavParams, ToastController } from 'ionic-angular';
import { CompanyTabsPage } from '../../company-tabs/company-tabs';
import { FacilityProfileMorePopover } from '../../../shared/popovers/facility-profile-more/facility-profile-more';
import { FacilityService } from '../../../../app/core/facility/facility.service';
import { Facility } from '../../../../app/models/models';

@Component({
  selector: 'page-facility-profile',
  templateUrl: 'facility-profile.html'
})

export class FacilityProfilePage {

  title: string = 'Facility Profile'
  facility: Facility

  constructor(
    private app: App, 
    private pop: PopoverController, 
    private facilityService: FacilityService,
    private params: NavParams,
    private toast: ToastController
  ) { 
    this.facility = params.data.facility;
    console.log('facility', this.facility);
  }

  private goBack() {
    // this.events.publish('resident-detail-closed');
    this.app.getRootNav().push(CompanyTabsPage);
  }

  presentMorePopover(event) {
    let morePopover = this.pop.create(FacilityProfileMorePopover);
    
    morePopover.onDidDismiss((action) => {
      if(action === 'delete') {
        this.deleteFacility(this.facility.id);
      }
    });

    morePopover.present({
      ev: event
    });
  }

  deleteFacility(id) {
    this.facilityService.deleteFacility(id).subscribe(
      (facility: Facility) => {
        console.log('delete facility', facility)
        let toast = this.toast.create({
          message: `Facility successfully deleted`,
          duration: 3000,
          position: 'bottom',
          cssClass: 'toast-success toast-wrapper'
        });

        toast.present()
        this.app.getRootNav().push(CompanyTabsPage);
      }
    )
  }

  
}