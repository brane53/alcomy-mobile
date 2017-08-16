import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2'
import { BehaviorSubject } from 'rxjs';
import { Facility } from '../models/models';
import { AccountService } from './account.service';


@Injectable()
export class FacilityService {
  currentFacility: FirebaseObjectObservable<Facility>;
  facilities: FirebaseListObservable<Facility[]>;

  constructor(private af: AngularFire, private account: AccountService) {

  }

  // Add a new facility to a company account
  addFacility(facility: Facility){
    const account = this.af.database.list(`/facilitiesByAccount/${this.account.id}`);
    const promise = account.push(facility);

    promise.catch((err)=> {
      console.log('Facility did not get added', err);
    });
  }

  // Update a facility's information

  // Get a list of facilities accessable by the current user
  getFacilities(userId: string){
    this.facilities = this.af.database.list('/facilitiesByAccount');
  }
  // Get a facility by it's id
  

}