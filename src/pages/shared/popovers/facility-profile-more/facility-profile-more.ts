import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'facility-profile-more',
  templateUrl: 'facility-profile-more.html'
})

export class FacilityProfileMorePopover {
  constructor(private viewCrtl: ViewController) { }

  delete() {
    this.viewCrtl.dismiss('delete');
  }
}